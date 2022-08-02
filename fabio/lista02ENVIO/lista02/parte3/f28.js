//Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
//um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
//não pode ser negativo.
import {input} from '../../io_utils.js'
function main(){
    const ponto1 = input('Informe as coordenadas x e y do primeiro ponto no plano:')
    const [x1, y1] = ponto1.split(' ').map(Number)
    const ponto2 = input('Informe as coordenadas x e y do segundo ponto no plano:')
    const [x2, y2] = ponto2.split(' ').map(Number)

        const verificaArea = calcula_area(x1, x2, y1, y2)
        console.log(`A área do retângulo é ${verificaArea}`)
   
}
main()
function calcula_area(x1,x2, y1, y2){
    let abs1 = Math.abs(x1)
    let abs2 = Math.abs(x2)
    let abs3 = Math.abs(y1)
    let abs4 = Math.abs(y2)

    let altura = abs1 + abs2
    let largura = abs3 + abs4

    let area = altura * largura

    return area
}