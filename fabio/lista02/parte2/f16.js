//Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior ou
//igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
//final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
//escreva “Reprovado”.
//Escreva um algoritmo para ler um número e verificar se ele obedece a esta característica.
import {input} from '../../io_utils.js'
function main(){
    const notas = input('Digite suas duas notas: ')
    const [n1, n2] = notas.split(' ').map(Number)

    const aluno = teste_situacao(n1, n2)

    console.log(`Você está ${aluno}`)


}
main()
function teste_situacao(n1, n2){
    let situacao
    const maiorMenor = (n1 + n2) / 2

    if(maiorMenor >= 7){
        situacao = 'Aprovado'
    }
    else if(maiorMenor < 7){
        const deuMenor = (Number(input('Digite a sua media final: ')))
        if(deuMenor >= 5){
            situacao = 'Aprovado'
        }
        else {
            situacao = 'Reprovado'
        }
    }
    return situacao
}