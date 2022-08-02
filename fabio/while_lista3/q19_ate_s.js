import prompt from 'prompt-sync'
const input = prompt()
import {eh_par} from './funcoes_while3.js'

function main() {
    const num = Number(input('Número: '))

    let count = num
    let count_pos = 0
    let countx = 1
    let soma = 0
    let lista = new Array()

    while (countx <= num) {

        if (eh_par(count_pos)) {
            lista[count_pos] = `${countx}/${count}`
            soma += countx / count
            console.log(soma)
        }
        else {
            lista[count_pos] = `${count}/${countx}`
            soma -= count / countx
            console.log(soma)
        }
        count_pos++
        countx++
        count--


    }


    const newlista = lista.join(', ')
    //const newsoma = soma + num/1

    console.log(newlista)
    console.log(`Soma = ${soma.toFixed(2)}`)

}




main() 