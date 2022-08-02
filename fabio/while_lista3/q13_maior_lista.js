import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const num = Number(input('Número de elementos: '))
    
    let lista = new Array(num)
    for(let i=0; i < lista.length; i++){
        lista[i] = Number(input(`(${i+1}): `))
    }
    console.log(lista)

    let maior = 0
    for(let i=0; i < lista.length; i++){
        if(lista[i] > maior){
            maior = lista[i]
        }
    }
    console.log(`Maior valor: ${maior}`)

}
main()