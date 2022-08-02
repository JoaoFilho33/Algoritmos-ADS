import fs from 'fs'
var input = fs.readFileSync('1238.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const qtd_casos = Number(lines[0])  
    let caracteres  
    let caracteres_combinados
    
    for(let i = 1; i <= qtd_casos; i++){
        caracteres = lines[i].split(' ')
        caracteres_combinados = combinar_caracteres(caracteres)
        console.log(caracteres_combinados)
    }

}

function combinar_caracteres(caracteres){
    const palavra1 = caracteres[0]
    const palavra2 = caracteres[1]
    const [maior_palavra, menor_palavra] = maior_menor(caracteres)
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
            novo_texto += palavra1[j]
            j++
        }else{
            novo_texto += palavra2[k]
            k++
        }
    }

    for(let i = inicio_ultimas_letras; i < tamanho_maior; i++){
        novo_texto += maior_palavra[i]
    }

    return novo_texto

}

function maior_menor(texto){
    let tamanho1 = texto[0].length
    let tamanho2 = texto[1].length
    let maior,menor

    if(tamanho1 > tamanho2){
        maior = texto[0]
        menor = texto[1]
    }else{
        maior = texto[1]
        menor = texto[0]
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