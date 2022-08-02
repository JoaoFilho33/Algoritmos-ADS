import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const num = Number(input('Número: '))
    
    let elementos = 0
    let count = 2
    let lista = new Array(0, 1)
    //a sequência fibonacci já começa com esses dois primeiros elementos e de acordo com a questão, 
    //deveríamos tomar a sequência como sendo exclusivamente composta por pelo menos 2 termos

    while(elementos < num - 2){//como a sequência já se inicia com dois termos, o seu tamanho buscado deverá ser -2
        lista[count] = lista[count - 1] + lista[count-2]

        count++
        elementos++
    }
    console.log(`Sequência Fibonacci dos ${num} primeiros elementos é (${lista})`)

}
main()