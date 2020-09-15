import string from "./editors/string";
import number from "./editors/number";
import date from "./editors/date";
import color from "./editors/color";


const editors = {
    string,
    number,
    integer:number,
    date,
    color
}

export default {
    factory(format,type){
        return editors[format] || editors[type];
    }
}