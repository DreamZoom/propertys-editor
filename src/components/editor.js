import "./editor.css"
import string from "./editors/string";
import number from "./editors/number";
import date from "./editors/date";
import color from "./editors/color";
import select from "./editors/select";


const editors = {
    string,
    number,
    integer:number,
    date,
    color,
    select
}

export default {
    factory(format,type){
        return editors[format] || editors[type];
    }
}