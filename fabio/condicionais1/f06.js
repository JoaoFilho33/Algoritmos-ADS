import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const periodo = input('Informe a inicial do período que o aluno estuda. (EX: Matutino - M): ')
    
    if(periodo === 'M'){
        console.log('Bom Dia!')
    }
    else if(periodo === 'V'){
        console.log('Boa Tarde!')
    }
    else if(periodo === 'N'){
        console.log('Boa Noite!')
    }
    else{
        console.log('Valor Inválido!')
    }
}
main()