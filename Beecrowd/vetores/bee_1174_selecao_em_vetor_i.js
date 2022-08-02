import prompt from 'prompt-sync'
const input = prompt()

function main(){
    let numero = []

    for(let i = 0; i < 100; i++){
        numero[i] = Number(input('Valor: '))
    }

    for(let i = 0; i < numero.length; i++){
        if(menor_ou_igual_a_10){
            console.log(`A[${[i]}] = ${numero[i]}`)
        }
    }

}
const menor_ou_igual_a_10 = (numero) => numero <= 10

main()