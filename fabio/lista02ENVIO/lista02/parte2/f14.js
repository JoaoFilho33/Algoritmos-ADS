//Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.
import {input} from '../../io_utils.js'
function main(){
    let numeros = input('Digite 5 valores: ')
    const [n1, n2, n3, n4, n5] = numeros.split(' ').map(Number)

    const variavelmedia = calculoMedia(n1, n2, n3, n4, n5)
    const calculoMaior = maiorQuemedia(n1, n2, n3, n4, n5)
    

    console.log(`A média dos valores é: ${variavelmedia} `)
    console.log(`\t Os maiores valores são: ${calculoMaior}`)

}
main()
function calculoMedia(n1, n2, n3, n4, n5){
    const resultado = (n1 + n2 + n3 + n4 + n5) / 5
    return resultado
}

function maiorQuemedia(n1, n2, n3, n4, n5){
    let maior1 = ''
    let maior2 = ''
    let maior3 = ''
    let maior4 = ''
    let maior5 = ''
    const media = (n1 + n2 + n3 + n4 + n5) / 5
    if(n1 > media){
        maior1 = n1
    }
    if(n2 > media){
        maior2 = n2
    }
    if(n3 > media){
        maior3 = n3
    }
    if(n4 > media){
        maior4 = n4
    }
    if(n5 > media){
        maior5 = n5
    }
    const colecao = [maior1, maior2, maior3, maior4, maior5]
    const colecao2 = colecao.filter(Number)

    return colecao2
    
}