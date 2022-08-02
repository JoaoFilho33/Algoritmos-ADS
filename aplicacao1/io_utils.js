import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

export function input_number(min, max){
    let repetir = 0
    let num

    while(repetir === 0){
        num = Number(input(`Informe um valor dentro da faixa ${min} e ${max}: `))
        if(num >= min && num <= max){
            repetir = 1
        }else{
            console.log('')
            console.log('** Valor fora da faixa **')
            console.log('')
            repetir = 0
        }
    }

    return num
}