import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let contador_pares = 0
    let contador_impares = 0
    let contador_positivos = 0
    let contador_negativos = 0

    let anterior = Number(input('Número 1: '))
    let atual = Number(input('Número 2: '))

    if(eh_par(anterior)){
        contador_pares++
    }
    else{
        contador_impares++
    }

    if(eh_par(atual)){
        contador_pares++
    }
    else{
        contador_impares++
    }

    if(eh_positivo(anterior)){
        contador_positivos++
    }
    else{
        contador_negativos++
    }

    if(eh_positivo(atual)){
        contador_positivos++
    }
    else{
        contador_negativos++
    }

    while(!for_multiplo(anterior, atual)){
        anterior = atual
        atual = Number(input('Mais um número: '))

        if(eh_par(atual)){
            contador_pares++
        }
        else{
            contador_impares++        
        }

        if(eh_positivo(atual)){
            contador_positivos++
        }
        else{
            contador_negativos++
        }
    }

    console.log(`Qtd Pares: ${contador_pares}`)
    console.log(`Qtd Ímpares: ${contador_impares}`)
    console.log(`Qtd Positivos: ${contador_positivos}`)
    console.log(`Qtd Negativos: ${contador_negativos}`)

}
main()

function for_multiplo(num1, num2){
    if(num1 === 0 && num2 === 0){
        return true
    }
    
    if(num1 % num2 === 0 || num2 % num1 === 0){
        return true
    }
    else{
        return false
    }
}

function eh_par(num){
    return num % 2 === 0
}
    
function eh_positivo(num){
    if(num > 0){
        return true
    }
    else if(num < 0){
        return false
    }
}