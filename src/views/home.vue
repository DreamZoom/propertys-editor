<template>
    <div>
        <property-grid :schema="schema" v-model="value"></property-grid>

        {{JSON.stringify(value)}}
    </div>
</template>
<script>
const schema = {
  type: "object",
  title: "条件",
  properties: {
    name: {
      type: "string",
      title: "名称",
    },
    appId: {
      type: "color",
      title: "应用ID",
      format: "select",
      select: ["a", "b", "c"],
    },
    credate: {
      type: "string",
      title: "创建日期",
      format: "date",
    },
    list: {
      type: "array",
      title: "列表",
      items: {
        type: "object",
        title: "用户",
        properties: {
          name: {
            type: "string",
            title: "名称",
          },
          age: {
            type: "number",
            title: "年龄",
          },
        },
      },
    },
  },
};
export default {
    data(){
        return {
            schema,
            value:{}
        }
    }
}
</script>