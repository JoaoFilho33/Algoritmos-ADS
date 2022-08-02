//Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e 
//ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

import{input, print} from '../io_utils.js'
function main(){
    const x1 = Number(input('Informe o ponto x do plano cartesiano: '))
    const y1 = Number(input('Informe o y do plano cartesiano: '))

    const x2 = Number(input('Informe o ponto y para o outro plano cartesiano: '))
    const y2 = Number(input('Informe o ponto y desse outro plano: '))

    const distancia_entrePontos = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))

    print(`A distância entre os pontos é: ${distancia_entrePontos}`)


}
main()

 
