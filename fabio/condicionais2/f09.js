import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const valor = Number(input('Número: '))

    if(valor === 1){
        console.log('Domingo')
    }
    else if(valor === 2){
        console.log('Segunda-feira')
    }
    else if(valor === 3){
        console.log('Terça-feira')
    }
    else if(valor === 4){
        console.log('Quanta-feira')
    }
    else if(valor === 5){
        console.lof('Quinta-feira')
    }
    else if(valor === 6){
        console.log('Sexta-feira')
    }
    else if(valor === 7){
        console.log('Sábado')
    }
    else{
        console.log('Valor inválido')
    }
}

main()