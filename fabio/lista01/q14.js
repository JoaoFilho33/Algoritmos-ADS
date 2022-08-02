//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
import {input, print} from '../io_utils.js'
    //entrada
    const nota1 = Number(input('Digite sua primeira nota: '))
    const peso1 = Number(input('Digite o peso dessa nota: '))

    const nota2 = Number(input('Digite sua segunda nota: '))
    const peso2 = Number(input('Digite o peso dessa nota: '))

    const nota3 = Number(input('Digite sua terceira nota: '))
    const peso3 = Number(input('Digite o peso dessa nota: '))

    //processamento
    const media_notas = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

    //saída
    print(`A média ponderada é: ${media_notas}`)