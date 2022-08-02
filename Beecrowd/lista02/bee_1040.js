import {input} from './io_utils.js'
function main(){
    const notas = input('Informe suas 4 notas (Ex: 10.0): ')
    const [n1, n2, n3, n4] = notas.split(' ').map(Number)

    const media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10
    console.log(`Media: ${media.toFixed(1)}`)

   
    if(media < 5){
        console.log('Aluno reprovado.')
    }
    else if(media >= 5 && media <= 6.9){
        console.log('Aluno em exame.')
        const exame = Number(input('Nota do exame: '))
        const nova_media = (exame + media) / 2
        if(nova_media >= 5){
            console.log('Aluno aprovado')
        }
        else{
            console.log('Aluno reprovado')
        }
        console.log(`Media final: ${nova_media.toFixed(1)}`)
    }
    else if(media >= 7){
        console.log('Aluno aprovado.')
    }

}
main()