import prompt from 'prompt-sync'
const input = prompt()

function main(){
        const r_alcool = Number(input('Rendimento alcool (km/l): '))
        const r_gasolina = Number(input('Rendimento gasolina (km/l: '))

        const distancia = Number(input('Distancia a ser percorrida: '))
        const valorA = Number(input('Valor alcool: '))
        const valorG = Number(input('Valor gasolina: '))

        const consumo_alcool = (distancia / r_alcool) * valorA
        const consumo_gasolina = (distancia / r_gasolina) * valorG
       
        console.log(`Despesa se usar alcool: R$ ${consumo_alcool.toFixed(2)}`)
        console.log(`Despesa se usar gasolina: R$ ${consumo_gasolina.toFixed(2)}`)
}
main()