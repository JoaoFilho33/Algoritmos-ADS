import fs from 'fs'
var input = fs.readFileSync('1253.txt', 'utf8');
var lines = input.split('\n');

function main(){
    const qtd_casos = Number(lines[0])
    let num_casas
    let cifra_criptografada
    let cifra_decodificada
    let count = 1
    
    for(let i = 0; i < qtd_casos; i++){
        cifra_criptografada = lines[count]
        count++
        num_casas = Number(lines[count])
        count++
        
        cifra_decodificada = decodificar_cifra(cifra_criptografada, num_casas)
        console.log(cifra_decodificada)
    }

}
function decodificar_cifra(cifra, deslocamento){
    let cifra_decodificada = ''
    let index_descriptografado
    let index_cifra = cifra.split('')
    
    for(let i = 0; i < cifra.length; i++){
        index_descriptografado = descriptografar_posicao(index_cifra[i], deslocamento) 

        cifra_decodificada += index_descriptografado
    }
    return cifra_decodificada
}

function descriptografar_posicao(elemento, deslocamento){
    const codigo = ASCII(elemento)
    let elemento_decodificado 
    let novo_deslocamento

    if(codigo - deslocamento <= 64){
        novo_deslocamento = 90 - (deslocamento - (codigo - 64))

        elemento_decodificado = String.fromCharCode(novo_deslocamento)
    }
    else{
        novo_deslocamento = codigo - deslocamento
        elemento_decodificado = String.fromCharCode(novo_deslocamento)
    }

    return elemento_decodificado
}

const ASCII = (elemento) => elemento.charCodeAt(0)

main()