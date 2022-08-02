import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const num = Number(input('Número: '))

    let count = 1
    let guardar = 0
    let lista = new Array(count)

    while(count <= num){
        guardar += 1/count
        lista[count-1] = `1/${count}`
        count++
    }
    let newlista = lista.join(', ')

    console.log(newlista)
    console.log(`Soma = ${guardar.toFixed(2)}`)

}
main()