import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const momento1 = input('Momento no formato (hh/mm): ')
    const [hh1, mm1] = momento1.split('/').map(Number)
    const momento2 = input('Momento no formato (hh/mm): ')
    const [hh2, mm2] = momento2.split('/').map(Number)


    let horas = 0
    let minutos = 0
    let conversao_horas = 0
    let conversao_minutos = 0

    if(hh1 > hh2 ){
        console.log('Horário Inválido')
    }
    else if(hh1 < hh2 && mm1 > mm2){ 
        horas = ((hh2 - hh1) * 60) - (mm1 - mm2)
        conversao_horas = Math.trunc(horas / 60)
        minutos = conversao_horas * 60
        conversao_minutos = horas - minutos    

    console.log(`Intervalo de ${Math.abs(conversao_horas)} horas, e ${Math.abs(conversao_minutos)} minutos`)
    }
    else if(hh1 < hh2 && mm1 < mm2){
        horas = hh2 - hh1
        minutos = mm2 - mm1
        console.log(`Intervalo de ${Math.abs(horas)} horas e ${Math.abs(minutos)} minutos`)

    }

    

}
main()
