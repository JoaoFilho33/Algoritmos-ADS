export function eh_par_ou_nulo(count) {
    if (count === 0 || count % 2 === 0) {
        return true
    }
    return false
}

export function new_vetor(tamanho) {
    const vetor = new Array(tamanho)

    return vetor
}