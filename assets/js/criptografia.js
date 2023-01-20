
$('#escolheCifra').change(function (event) {
    var cifra = event.currentTarget.value;
    escolheCifra(cifra)
    return cifra
});

$('#codificar').on('click', () => {
    $('#botao').text('Codificar')
})
$('#decodificar').on('click', () => {
    $('#botao').text('Decodificar')
})




function escolheCifra(verificador) {

    if (verificador == 'cifraDeCesar') {
        $('#selectDesloc').css({
            'display': 'flex'
        })
        $('#botao').css({'display': 'block'})
        mostrarCesar()
    } else if (verificador == 'base64') {
        $('#selectDesloc').css({
            'display': 'none'
        })
        $('#deslocamento').val('')
        $('#botao').css({'display': 'block'})
        mostrarBase()
    }

}

$('#botao').on('click', () => {
    var numDesloc = $('#deslocamento').val()
    const texto = $('#entrada').val()
    $('#result').empty();
    if (numDesloc == '') {
        if ($('#codificar').is(':checked')) {
            if (texto == '') {
                alert('Informe algo para codificar')
            } else {
                encode(texto)
            }
        } else if ($('#decodificar').is(':checked')) {
            if (texto == '') {
                alert('Informe algo para codificar')
            } else {
                decode(texto)
            }
        }
    } else if ($('#codificar').is(' :checked')) {
        if (texto == '') {
            alert('Informe algo para codificar')')
        } else {
            const arrayTexto = texto.split('')
            const valor = parseInt(numDesloc)
            show(cesarCodifica(arrayTexto, valor))

        }
    } else if ($('#decodificar').is(' :checked')) {
        if (texto == '') {
            alert('Informe algo para codificar')
        } else {
            const arrayTexto = texto.split('')
            const valor = parseInt(numDesloc)
            show(cesarDecodifica(arrayTexto, valor))
        }
    }
})


function mostrarCesar() { 
    $('.descricao').empty()
    const oqueE = `Como funciona a cifra de César?
    É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, 
    que se apresenta no alfabeto abaixo dela um número fixo de vezes. Por exemplo, com uma troca de três posições,
     A seria substituído por D, B se tornaria E, e assim por diante.`
    $('.descricao').append(`<span>${oqueE}</span>`)
 }

function mostrarBase() {
    $('.descricao').empty()
    const base = `O que é um arquivo em Base64?
    Base64 é um grupo de esquemas de codificação binários para texto semelhantes que
    representam dados binários em um formato de string ASCII, traduzindo-os em uma representação radix-64.
    O termo Base64 se origina de uma codificação de transferência de conteúdo MIME.`
    $('.descricao').append(`<span>${base}</span>`)
}

// Cifra de Cesar
// A - Z = 65 a 90
// a - z = 97 a 122


function cesarCodifica(msg, incremento) {
    return msg.map((texto) => {
        var codifique = texto.charCodeAt()
        if (codifique >= 65 && codifique <= 90) {
            return String.fromCharCode(((codifique - 65 + incremento) % 26) + 65);
        } else if (codifique >= 97 && codifique <= 122) {
            return String.fromCharCode(((codifique - 97 + incremento) % 26) + 97);
        } else {
            return texto
        }
    }).join('')
}

function cesarDecodifica(msg, incremento) {
    return msg.map((texto) => {
        var codifique = texto.charCodeAt()
        if (codifique >= 65 && codifique <= 90) {
            return String.fromCharCode(((codifique - 90 - incremento) % 26) + 90);
        } else if (codifique >= 97 && codifique <= 122) {
            return String.fromCharCode(((codifique - 122 - incremento) % 26) + 122);
        } else {
            return texto
        }
    }).join('')
}


//base64

function encode(txt) {
    let result = btoa(txt)
    show(result)
}
function decode(txt) {

    let result = atob(txt)

    show(result)
}
function show(msg) {
    // console.log(msg);
    $('#result').append(`<p>${msg}</p>`).css({ 'display': 'flex' })

}