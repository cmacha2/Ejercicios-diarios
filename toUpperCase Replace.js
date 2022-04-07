function toCamelCase(str){
    let call = str.toString();
    let resultado = call.replace(/[_-]/g, ' ').replace(/\b\w/g, x => x.toUpperCase());
    return call.charAt(0) === resultado.charAt(0) ? resultado.replace(/ /g,"") : (resultado.charAt(0).toLowerCase()+resultado.slice(1)).replace(/ /g,"")
}