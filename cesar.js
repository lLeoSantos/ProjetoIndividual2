// const alfabetoMin = {
//     0 : 'a',
//     1 : 'b',
//     2 : 'c',
//     3 : 'd',
//     4 : 'e',
//     5 : 'f',
//     6 : 'g',
//     7 : 'h',
//     8 : 'i',
//     9 : 'j',
//     10 : 'k', 
//     11 : 'l',
//     12 : 'm',
//     13 : 'n',
//     14 : 'o',
//     15 : 'p',
//     16 : 'q',
//     17 : 'r',
//     18 : 's',
//     19 : 't',
//     20 : 'u',
//     21 : 'v',
//     22 : 'w',
//     23 : 'x',
//     24 : 'y',
//     25 : 'z'
// }
var texto = 'codifica'
let cont = 2
var tex2 = 'eqfkhkec'


// A - Z = 65 á 90
// a - z = 97 á 122



function cesarDecodifica(msg, deslocamento){
    return msg.map((texto)=>{
        var codifique = texto.charCodeAt()
        if(codifique >= 65 && codifique <= 90){
            return String.fromCharCode(((codifique - 90 - deslocamento) % 26) + 90);
        }else if(codifique >= 97 && codifique <= 122){
            return String.fromCharCode(((codifique - 122 - deslocamento) % 26) + 122);
        }else {
            return texto
        }
    }).join('')
}

function cesarCodifica(msg, deslocamento){
    return msg.map((texto)=>{
        var codifique = texto.charCodeAt()
        if(codifique >= 65 && codifique <= 90){
            return String.fromCharCode(((codifique - 65 + deslocamento) % 26) + 65);
        }else if(codifique >= 97 && codifique <= 122){
            return String.fromCharCode(((codifique - 97 + deslocamento) % 26) + 97);
        }else {
            return texto
        }
    }).join('')
}

var b = tex2.split('')
console.log(cesarDecodifica(b, cont));

var a = texto.split('')
console.log(cesarCodifica(a, cont));

var b = tex2.split('')
console.log(cesarDecodifica(b, cont));

var a = texto.split('')
console.log(cesarCodifica(a, cont));