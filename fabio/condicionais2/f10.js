import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const nota1 = Number(input('Primeira nota: '))
    const nota2 = Number(input('Segunda nota: '))

    const media = (nota1 + nota2) / 2

    let conceito = ''
    if(media >= 9 && media <= 10){
        console.log(nota1)
        console.log(nota2)
        console.log(media)
        console.log('Conceito A')
        console.log('Aprovado')
    }
    else if(media >= 7.5 && media < 9){
        console.log(nota1)
        console.log(nota2)
        console.log(media)
        console.log('Conceito B')
        console.log('Aprovado')
    }
    else if(media >= 6 && media < 7.5){
        console.log(nota1)
        console.log(nota2)
        console.log(media)
        console.log('Conceito C')
        console.log('Aprovado')
    }
    else if(media >= 4 && media < 6){
        console.log(nota1)
        console.log(nota2)
        console.log(media)
        console.log('Conceito D')
        console.log('Aprovado')
    }
    else if(media >= 0 && media < 4){
        console.log(nota1)
        console.log(nota2)
        console.log(media)
        console.log('Conceito E')
        console.log('Aprovado')
    }

    
}
main()
