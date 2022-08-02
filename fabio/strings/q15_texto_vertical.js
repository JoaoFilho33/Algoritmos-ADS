import prompt from 'prompt-sync'
const input = prompt()
function main() {
    let texto = input('Texto (até 20 caracteres): ').split('')
    let texto_vertical = ''


    let count = 0
    if (texto.length <= 20) {
        while (count < texto.length) {
            texto_vertical = texto[count]
            console.log(`${texto_vertical}`)
            count++
        }
    }
    else{
        console.log('Limite de caracteres atingido')
    }    

}



main()