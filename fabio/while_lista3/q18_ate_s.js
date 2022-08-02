import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const num = Number(input('Número: '))

    let count = 0
    let countj = 1
    let soma = 0
    let lista = new Array()

    while(count < num){
        soma += countj/(num-count)

        lista[count] = `${countj}/${num}-${count}`
        count++
        countj++
    }

    
    const newlista = lista.join(', ')

    console.log(newlista)
    console.log(`Soma = ${soma.toFixed(2)}`)

}
main()