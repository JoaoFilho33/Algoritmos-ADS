////Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais recente.
import {input} from '../../io_utils.js'
function main(){
    let data1 = input('Informe a primeira data: ')
    const[d1, m1, a1] = data1.split(' ').map(Number)
    
    let data2 = input('Informe a segunda data: ')
    const[d2, m2, a2] = data2.split(' ').map(Number)

    const verificar = testeRecente(d1, m1, a1, d2, m2, a2)

    console.log(`${verificar}`)
}
main()
function testeRecente(d1, m1, a1, d2, m2, a2){
    let maior 
    let maisRecente 
    if(d1 > d2 && m1 > m2 && a1 > a2){
        maisRecente = 'A primeira data é a mais recente'
    }
    else if(d1 > d2 && m1 < m2 && a1 > a2){
        maisRecente = 'A primeira data é a mais recente'
    }
    else if(d1 < d2 && m1 < m2 && a1 > a2){
        maisRecente = 'A primeira data é a mais recente'
    }
    //
    else if(d1 < d2 && m1 < m2 && a1 < a2){
        maisRecente = 'A segunda data é a mais recente'
    }
    else if(d1 > d2 && m1 < m2 && a1 < a2){
        maisRecente = 'A segunda data é a mais recente'
    }
    else if(d1 > d2 && m1 > m2 && a1 < a2){
        maisRecente = 'A segunda data é a mais recente'
    }
    return maisRecente
}
