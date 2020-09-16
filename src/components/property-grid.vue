<template>
  <a-tree class="property-gird" :tree-data="data" blockNode :selectable="false">
    <template slot="title" slot-scope="{ title,type,format,model,schema,onAdd,onDelete }">
      <span v-if="type=='object'">{{title}}</span>
      <span v-else-if="type=='array'">
        {{title}}
        <span class="action" title="添加" @click="onAdd">
          <a-icon type="plus" />
        </span>
      </span>
      <span v-else>
        <a-row type="flex">
          <a-col>{{title}}:</a-col>
          <a-col :flex="1">
            <component :is="getEditor({type,format})" :schema="schema" v-model="model.value" @input="handleChange" />
          </a-col>
        </a-row>
      </span>
      <span class="action" title="删除" @click="onDelete" v-if="onDelete">
        <a-icon type="close" />
      </span>
    </template>
  </a-tree>
</template>


<script>
import editor from "./editor";

function make_tree(schema, name) {
  const { title, type, format } = schema;
  const row = {
    name,
    title,
    type,
    format,
    scopedSlots: { title: "title" },
    model: { value: "" },
    schema: schema,
  };
  if (type == "object") {
    const children = [];
    for (const key in schema.properties) {
      children.push(make_tree(schema.properties[key], key));
    }
    row.children = children;
  }

  if (schema.type == "array") {
    row.children = [];
    row.onAdd = () => {
      let item = make_tree(schema.items);
      item.onDelete = () => {
        row.children = row.children.filter((it) => it !== item);
      };
      row.children.push(item);
    };
  }
  return row;
}

function make_json(tree) {
  const { type, children } = tree;
  if (type == "object") {
    const model = {};
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      model[element.name] = make_json(element);
    }
    return model;
  }

  if (type == "array") {
    const model = [];
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      model.push(make_json(element));
    }
    return model;
  }

  return tree.model.value;
}

export default {
  name: "PropertyGrid",
  props: {
    schema: Object,
    value: null,
  },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    json() {
      return make_json(this.data[0]);
    },
  },
  mounted() {
    this.data = [make_tree(this.schema || {}, "root")];
    console.log(this.data);
  },
  methods: {
    getEditor(schema) {
      const { type, format } = schema;
      return editor.factory(format, type);
    },
    handleChange(){
      this.$emit("input",this.json);
    }
  },
};
</script>

<style>
.property-gird li ul {
  padding: 0 0 0 6px;
}
.property-gird li span.ant-tree-switcher {
  width: auto;
}
.property-gird li .ant-tree-node-content-wrapper:hover {
  background-color: transparent;
}
.property-gird .action {
  display: inline-block;
  text-align: center;
  width: 16px;
  height: 16px;
  margin: 0;
  background-color: #eee;
  font-size: 14px;
  line-height: 16px;
}
.property-gird .action:hover {
  background-color: #ccc;
}
</style>