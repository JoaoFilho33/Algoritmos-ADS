import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let atual
    let anterior
    let count_impar = 0
    let count_par = 0
    let count_negativo = 0
    let count_positivo = 0


    while(!for_multiplo(atual, anterior)){
        anterior = Number(input('> '))
        atual = Number(input('> '))
        if(eh_par(anterior)){
            count_par++
        }else{
            count_impar++
        }
        
        if(eh_positivo(anterior)){
            count_positivo++
        }else{
            count_negativo++
        }
        if(eh_par(atual)){
            count_par++
        }else{
            count_impar++
        }
        
        if(eh_positivo(atual)){
            count_positivo++
        }else{
            count_negativo++
        }
    }

    console.log(`QTD pares: ${count_par}`)
    console.log(`QTD impares: ${count_impar}`)
    console.log(`QTD positivos: ${count_positivo}`)
    console.log(`QTD negativos: ${count_negativo}`)
}
function for_multiplo(num1, num2){
    if(num1 === 0 && num2 === 0){
        return true
    }
    if(num1 % num2 === 0 || num2 % num1 ===0){
        return true
    }
    
        return false
    
}

const eh_par = (num) => num % 2 === 0

const eh_positivo = (num) => num >= 0


main()