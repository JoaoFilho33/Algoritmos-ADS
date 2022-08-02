export function eh_par_ou_nulo(count) {
    if (count === 0 || count % 2 === 0) {
        return true
    }
    return false
}

export function novo_vetor(tamanho, valor_padrao) {
    const vetor = new Array(tamanho).fill(valor_padrao)

    return vetor
}

//deve-se usar na função apenas o indice do vetor desejado 
//nesse caso chega na função o vetor[i]
export function converter_binario_em_decimal(vetor) {
    const vetor2 = vetor.split('').map(Number)
    let decimal = 0

    for (let i = 0; i < vetor2.length; i++) {
        if (vetor2[i] === 1) {
            decimal += 2 ** [i]
        }
    }
    return decimal
}

//o parâmetro é o vetor inteiro
export function maior_elemento(vetor) {
    let maior = 0
    let pos_maior = 0
    let count = 0
    while (count < vetor.length) {
        if (vetor[count] > maior) {
            maior = vetor[count]
            pos_maior = count + 1
        }
        count++
    }
    return [maior, pos_maior]
}

export function menor_elemento(vetor) {
    let menor = vetor[0]
    let pos_menor = 0
    let count = 0

    while (count < vetor.length) {
        if(vetor[count] <= menor){
            menor = vetor[count]
            pos_menor = count + 1
        }
        count++
    }
    return [menor, pos_menor]
}

export function ordenar_em_ordem_crescente(vetor) {
    let auxiliar
    let ordenar = 0
    let j = 0
    while (ordenar === 0) {
        ordenar = 1
        for(let i = 0; i < vetor.length - j; i++){
            if (vetor[i] > vetor[i + 1]) {
                auxiliar = vetor[i]
                vetor[i] = vetor[i + 1]
                vetor[i + 1] = auxiliar
                ordenar = 0
            }
        }
        j++
    }
    return vetor
}

export function escrever_fibonacci(tamanho, vetor){
    let count = 2
    let i = 1

    while(count < tamanho){
        vetor[count] = vetor[i] + vetor[i-1]
        i++
        count++
    }
    return vetor
}