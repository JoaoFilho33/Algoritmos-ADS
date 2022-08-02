import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const valor = input('Informe um valor menor que 1000: ')
    const valor2 = valor.split('').map(Number)
    

    if(valor > 1000){
        valor = Number(input('Valor fora do intervalo.\n Informe outro: '))
    }
    else if(valor >= 100 && valor < 1000){
            console.log(`${valor} = ${valor2[0]} centenas, ${valor2[1]} dezenas e ${valor2[2]} unidades`)
    }
    else if(valor < 100 && valor > 10){
        console.log(`${valor} = ${valor2[0]} dezenas. ${valor2[1]} unidades`)
    }
    else{
        console.log(`${valor} = ${valor2[0]} unidades`)
    }
}
main()