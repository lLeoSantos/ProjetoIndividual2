let texto = 'Olá mundo'


function encode(txt) {
    let result = btoa(txt)
    show(result)
}
function decode(txt) {
    
    let result = atob(txt)
    
    show(result)
}
function show(msg) {
    console.log(msg);
}





String.fromCharCode(71)
encode(texto)