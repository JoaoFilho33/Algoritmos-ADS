import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let numero = Number(input('informe um numero (0 a 255): '))
    let numero_hex = numero
    let resto_bin = []
    let resto_hex = []

    while(numero_hex > 0){
        resto_hex += numero_hex % 16
        numero_hex = Math.trunc(numero_hex / 16)
        
    }

    while(numero > 0){
        resto_bin += numero % 2
        numero = Math.trunc(numero / 2) 
    }

    
    const guarda_resto_bin = resto_bin.split('').reverse().join('')
    const guarda_resto_hex = resto_hex.split('').reverse().join('')


    console.log(`Binário: ${guarda_resto_bin}`)
    console.log(`Hexadecimal: ${guarda_resto_hex}`)

}
main()