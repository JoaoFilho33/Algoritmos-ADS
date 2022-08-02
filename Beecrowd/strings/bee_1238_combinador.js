import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const qtd_casos = Number(input('Quantidade de casos: '))  
    let caracteres  
    let caracteres_combinados
    
    for(let i = 0; i < qtd_casos; i++){
        caracteres = input('> ')
        caracteres_combinados = combinar_caracteres(caracteres)
        console.log(caracteres_combinados)
    }

}
function combinar_caracteres(caracteres){
    const [carac1, carac2] = caracteres.split(' ')
    const [maior_palavra, menor_palavra] = maior_menor(carac1, carac2)
    const tamanho_maior = maior_palavra.length
    const tamanho_menor = menor_palavra.length
    const diferenca = tamanho_maior - tamanho_menor
    const tamanho = (tamanho_maior - diferenca) + tamanho_menor
    const inicio_ultimas_letras = tamanho_maior - diferenca
    let novo_texto = ''
    let j = 0
    let k = 0

    for(let i = 0; i < tamanho; i++){
        if(eh_par_nulo(i)){
            novo_texto += carac1[j]
            j++
        }else{
            novo_texto += carac2[k]
            k++
        }
    }

    for(let i = inicio_ultimas_letras; i < tamanho_maior; i++){
        novo_texto += maior_palavra[i]
    }

    return novo_texto

}

function maior_menor(string1, string2){
    let tamanho1 = string1.length
    let tamanho2 = string2.length
    let maior,menor

    if(tamanho1 > tamanho2){
        maior = string1
        menor = string2
    }else{
        maior = string2
        menor = string1
    }

    return [maior,menor]
}

function eh_par_nulo(valor){
    if(valor % 2 === 0 || valor === 0){
        return true
    }

    return false
}

main()