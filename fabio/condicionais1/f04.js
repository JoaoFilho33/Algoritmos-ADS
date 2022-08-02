import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const nota = input('Informe suas duas notas: ')
    const [n1, n2] = nota.split(' ').map(Number)

    const media = (n1 + n2) / 2

    if(media >= 7){
        console.log('Aprovado')
    }
    else if(media < 7){
        console.log('Reprovado')
    }
    else if(media === 10){
        console.log('Aprovado com Distinção')
    }
    
}
main()