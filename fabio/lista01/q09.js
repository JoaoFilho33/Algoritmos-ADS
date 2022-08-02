//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import{print, input} from'../io_utils.js'

function main(){
    //entrada
    let numero = []
    numero[0] = Number(input('Digite dois números quaisquer: '))
    numero[1] = Number(input(': '))

    //processamento
    numero.reverse()

    //saída
    print(numero)


}
main()