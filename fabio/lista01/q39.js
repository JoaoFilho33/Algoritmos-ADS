//Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

import{print, input} from '../io_utils.js'
function main(){
    const a = Number(input('Informe um número inteiro positivo: '))
    const b = Number(input('Informe outro número: '))
    const c = Number(input('Informe outro número: '))

    const r = (a + b)**2
    const s = (b + c)**2

    const resultado_d = (r + s) / 2

    print(`O resultado da expressão D = (r+s)/2 é: ${resultado_d}`)

}
main()