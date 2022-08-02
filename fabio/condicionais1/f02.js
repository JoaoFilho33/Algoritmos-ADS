import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const sexo = input('Informe F ou M: ')

    if(eh_f(sexo)){
        console.log('F-Feminino')
    }
    else if(eh_m(sexo)){
        console.log('M-Masculino')
    }
    else{
        console.log('Sexo inválido')
    }
}
main()
function eh_f(sexo){
    while(sexo === 'f'){
        return true
    }
}
//
function eh_m(sexo){
    while(sexo === 'm'){
        return true
    }
}
