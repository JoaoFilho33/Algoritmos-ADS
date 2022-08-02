import prompt from 'prompt-sync'
const input = prompt()
//letra (b)
export function input_numero_positivo() {
    let repetir = 0
    let num

    while (repetir === 0) {
        num = Number(input(`Informe um número positivo: `))
        if (num > 0) {
            repetir = 1
        } else {
            console.log('')
            console.log('** Valor fora da faixa dos positivos **')
            console.log('')
            repetir = 0
        }
    }

    return num
}
//letra (c)
export function input_numero_negativo() {
    let repetir = 0
    let num

    while (repetir === 0) {
        num = Number(input(`Informe um número negativo: `))
        if (num < 0) {
            repetir = 1
        } else {
            console.log('')
            console.log('** Valor fora da faixa dos negativos **')
            console.log('')
            repetir = 0
        }
    }

    return num
}

function eh_numero(num) {
    return num < 0 || num >= 0
}
//letra (a)
export function input_numero() {
    let num
    let repetir = 0

    while (repetir === 0) {
        num = Number(input('Informe um número: '))
        if (eh_numero(num)) {
            repetir = 1
        }
        else {
            console.log('')
            console.log('** O elemento informado não é número **')
            console.log('')
            repetir = 0
        }
    }

    return num
}

const eh_nulo = num => num === 0
//letra (d)
export function input_valor_nao_nulo() {
    let num
    let repetir = 0

    while (repetir === 0) {
        num = Number(input('Informe um valor não nulo: '))
        if (!eh_nulo(num)) {
            repetir = 1
        }
        else {
            console.log('')
            console.log('** O elemento informado é nulo **')
            console.log('Por favor, reincira um valor dentro da faixa')
            console.log('')
            repetir = 0
        }
    }

    return num
}
//letra (e)
export function input_valor_maior_que_faixa(min) {
    let num
    let repetir = 0

    while (repetir === 0) {
        num = Number(input(`Informe um valor maior que ${min}: `))
        if (num > min) {
            repetir = 1
        }
        else {
            console.log('')
            console.log(`** O elemento informado é menor que ${min} **`)
            console.log('Por favor, reincira um valor dentro da faixa')
            console.log('')
            repetir = 0
        }
    }

    return num
}
//letra (f)
export function input_valor_menor_que_faixa(max) {
    let num
    let repetir = 0

    while (repetir === 0) {
        num = Number(input(`Informe um valor menor que (${max}): `))
        if (num < max) {
            repetir = 1
        }
        else {
            console.log('')
            console.log(`** O elemento informado é maior que (${max}) **`)
            console.log('Por favor, reincira um valor dentro da faixa')
            console.log('')
            repetir = 0
        }
    }

    return num
}
//letra (g)
export function input_valor_entre_a_faixa(min, max) {
    let repetir = 0
    let num

    while (repetir === 0) {
        num = Number(input(`Informe um valor dentro da faixa ${min} e ${max}: `))
        if (num >= min && num <= max) {
            repetir = 1
        } else {
            console.log('')
            console.log('** Valor fora da faixa **')
            console.log('Por favor, reincira um valor dentro da faixa')
            console.log('')
            repetir = 0
        }
    }

    return num
}
//letra (h)
export function input_valor_texto() {
    let texto = ''
    let repetir = 0

    while (repetir === 0) {
        texto = input('Insira um texto: ')
        if (!eh_numero(texto)) {
            repetir = 1
        }
        else {
            console.log('')
            console.log('** O elemento informado não é um texto **')
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
    }

    return texto
}
//letra (i)
export function input_texto_de_tamanho_min(min) {
    let texto = ''
    let repetir = 0

    while (repetir === 0) {
        texto = input('Insira um texto: ').split('')
        if (!eh_numero(texto) && texto.length >= min) {
            repetir = 1
        }
        else if (eh_numero(texto)) {
            console.clear()
            console.log('')
            console.log('** O elemento informado não é um texto **')
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
        else {
            console.clear()
            console.log('')
            console.log(`** O texto é menor que o tamanho mínimo ${min} **`)
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
    }

    return texto.join('')
}
//letra (j)
export function input_texto_de_tamanho_max(max) {
    let texto = ''
    let repetir = 0

    while (repetir === 0) {
        texto = input('Insira um texto: ').split('')
        if (!eh_numero(texto) && texto.length <= max) {
            repetir = 1
        }
        else if (eh_numero(texto)) {
            console.clear()
            console.log('')
            console.log('** O elemento informado não é um texto **')
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
        else {
            console.clear()
            console.log('')
            console.log(`** O texto é maior que o tamanho máximo ${max} **`)
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
    }

    return texto.join('')
}

function esta_na_faixa(tamanho, min, max) {
    return tamanho >= min && tamanho <= max
}
//letra (k)
export function input_texto_entre_faixa(min, max) {
    let texto = ''
    let repetir = 0

    while (repetir === 0) {
        texto = input('Insira um texto: ').split('')
        if (!eh_numero(texto) && esta_na_faixa(texto.length, min, max)) {
            repetir = 1
        }
        else if (eh_numero(texto)) {
            console.clear()
            console.log('')
            console.log('** O elemento informado não é um texto **')
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
        else {
            console.clear()
            console.log('')
            console.log(`** O texto não está entre a faixa (${min}) e (${max}) **`)
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
    }

    return texto.join('')
}
//letra (n)
export function input_texto_com_maximo_de_palavras(max) {
    let texto = ''
    let repetir = 0

    while (repetir === 0) {
        texto = input('Insira um texto: ').split(' ')
        if (!eh_numero(texto) && texto.length <= max) {
            repetir = 1
        }
        else if (eh_numero(texto)) {
            console.clear()
            console.log('')
            console.log('** O elemento informado não é um texto **')
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
        else {
            console.clear()
            console.log('')
            console.log(`** O texto é maior que o tamanho máximo ${max} **`)
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
    }

    return texto.join(' ')
}
//letra (m)
export function input_texto_com_minimo_de_palavras(min) {
    let texto = ''
    let repetir = 0

    while (repetir === 0) {
        texto = input('Insira um texto: ').split(' ')
        if (!eh_numero(texto) && texto.length >= min) {
            repetir = 1
        }
        else if (eh_numero(texto)) {
            console.clear()
            console.log('')
            console.log('** O elemento informado não é um texto **')
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
        else {
            console.clear()
            console.log('')
            console.log(`** O texto é menor que o tamanho mínimo ${min} **`)
            console.log('Por favor, reincira um elemento compatível')
            console.log('')
            repetir = 0
        }
    }

    return texto.join(' ')
}
//letra (o)
export function input_e_validacao_de_data() {
    let data
    let repetir = 0

    while (repetir === 0) {
        data = input('Insira uma data: ').split('/')
        for (let i = 0; i < data.length; i++) {
            if (eh_numero(Number(data[i])) && dia_mes_validos(Number(data[0]), data[1]) && ano_valido(data[2])) {
                repetir = 1
            }
            else {
                console.clear()
                console.log(`** A data informada não é válida **`)
                console.log('Por favor, reincira uma data no formato dd/MM/aaa')
                console.log('')
                repetir = 0
            }
        }
    }

    return data.join('/')
}

function dia_mes_validos(dia, mes){
    if(dia <= 31 && mes === '01', '03', '05', '07', '08', '10', '12'){
        return true
    }
    else if(dia === 28 && mes === '02'){
        return true
    }
    else if(dia <= 30 && mes === '04', '06', '09', '11'){
        return true
    }

    return false
}

function ano_valido(ano){
    let number_ano = Number(ano)
    if(eh_numero(number_ano) && ano.length === 4){
        return true
    }

    return false
}