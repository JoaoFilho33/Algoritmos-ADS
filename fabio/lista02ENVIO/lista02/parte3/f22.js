//Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
//hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
//máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
//seguinte.
import {input} from '../../io_utils.js'
function main(){
    const inicio = input('Informe a hora e os minutos de início do jogo (Ex: 10:30): ').split(':').map(Number)
    const fim = input('Informe a hora do fim do jogo: ').split(':').map(Number)

    const verificar1 = mesmo_dia(inicio, fim)

    console.log(`${verificar1}`)
}
main()
function mesmo_dia(inicio, fim){
    let horas 
    let minutos 
    if(inicio [0] < fim [0] && inicio [1] > fim [1]){
        horas = ((fim [0] - inicio [0]) * 60) - minutos

        minutos = fim [1] - inicio [1] 
    }
    else if(inicio [0] < fim [0] && inicio [1] === fim [1]){
        horas = fim [0] - inicio [0]
        minutos = '00'
    }
    else if(inicio [0] < fim [0] && inicio [1] < fim [1]){
        minutos = fim [1] - inicio [1]
        horas = (fim [0] - inicio [0]) - minutos
    }
    return `${horas}:${minutos}`
}
