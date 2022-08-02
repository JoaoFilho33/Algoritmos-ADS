function main(){
    const notas = lines[0].split(' ')
    const n1 = Number(notas[0])
    const n2 = Number(notas[1])
    const n3 = Number(notas[2])
    const n4 = Number(notas[3])

    const media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10
    console.log(`Media: ${media.toFixed(1)}`)

    
    if(media < 5){
        console.log('Aluno reprovado.')
    }
    else if(media >= 5 && media <= 6.9){
        console.log('Aluno em exame.')
        const nota_exame = Number(lines[1])
        console.log(`Nota do exame: ${nota_exame.toFixed(1)}`)
        const nova_media = (nota_exame + media) / 2
        if(nova_media >= 5){
            console.log('Aluno aprovado.')
        }
        else{
            console.log('Aluno reprovado.')
        }
        console.log(`Media final: ${nova_media.toFixed(1)}`)
    }
    else if(media >= 7){
        console.log('Aluno aprovado.')
    }
}
main()