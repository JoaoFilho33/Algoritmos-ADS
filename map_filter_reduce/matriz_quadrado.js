import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const qtd_elementos = Number(input('Quantidade de elementos: '))
    const vetor = []

    for(let i = 0; i < qtd_elementos; i++){
        vetor[i] = Number(input('Valores: '))
    }

    const quadrados = elevar_elementos_ao_quadrado(vetor)

    console.log(quadrados)

}
function elevar_elementos_ao_quadrado(elementos){
    let elementos_quadrado = []

    for(let i = 0; i < elementos.length; i++){
        elementos_quadrado[i] = elementos[i] ** 2
    }
    
    return elementos_quadrado
}


main()