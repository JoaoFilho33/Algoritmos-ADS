import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let num = input('Numero: ').split('')

    let digitos = num.length
    
    console.log(`Existem ${digitos} dígitos no número informado`)
}
main()