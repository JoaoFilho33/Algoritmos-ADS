export function filter_numeros_positivos(numeros){
    const vetor_de_positivos = []
    let j = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > 0){
            vetor_de_positivos[j] = numeros[i]
            j++
        }
    }
    return vetor_de_positivos
}

export function calcular_media(elementos){
    let soma = 0
    let tamanho = elementos.length

    for(let i = 0; i < tamanho; i++){
        soma += elementos[i]
    }

    return soma/tamanho
}

export function calcular_mediana(elementos){
    let meio
    let mediana

        if(elementos.length % 2 === 0){
            meio = elementos.length / 2
            mediana = (elementos[meio] + elementos[meio-1])/2
        }
        else{
            meio = (elementos.length-1)/2 
            mediana = elementos[meio]
        }

    return mediana
}

export function pegar_iniciais(nome) {
    let iniciais = ''

    for (let i = 0; i < nome.length; i++) {
        for (let j = 0; j < 1; j++) {
            iniciais += nome[i][0]
        }
    }

    return iniciais
}

export function maior_idade(vetor) {
    let maior = 0
    let count = 0
    while (count < vetor.length) {
        if (vetor[count] > maior) {
            maior = vetor[count]
        }
        count ++
    }
    return maior
}

export function menor_idade(vetor) {
    let menor = vetor[0]
    let count = 0

    while (count < vetor.length) {
        if(vetor[count] <= menor){
            menor = vetor[count]
        }
        count++
    }
    return menor
}

export function fazer_fatorial(numero){
    let fatorial = 1

    for(let i = numero; i > 0; i--){
        fatorial *= i
    }

    return fatorial
}

export function elementos_repetidos(matriz, ordem){
    const vetor = []
    for(let i = 0; i < ordem; i++){
        for(let j = 0; j < ordem; j++){
            if(matriz[i][j] === matriz[i][k]){
                
            }
        }
    }
}

export function elevar_elementos_ao_quadrado(elementos){
    let elementos_quadrado = []

    for(let i = 0; i < elementos.length; i++){
        elementos_quadrado[i] = elementos[i] ** 2
    }
    
    return elementos_quadrado
}
