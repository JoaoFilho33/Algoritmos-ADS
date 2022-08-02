import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const num = Number(input('Número de elementos: '))
    
    let lista = new Array(num)
    for(let i=0; i < lista.length; i++){
        lista[i] = Number(input(`(${i+1}): `))
    }
    console.log(lista)

    let soma_final = 0
    for(let soma in lista){
        soma_final += lista[soma]
    }
    console.log(`A soma dos valores da lista é: ${soma_final}`)

    let media = soma_final / num
    console.log(`A média é: ${media}`)
}
main()