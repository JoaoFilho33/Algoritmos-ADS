import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let horario = input('Horário (hh:mm:ss): ').split('')

    let count = 0
    while(count < horario.length){
            if(horario[2] === ':'){
                horario[2] = 'hora(s)'
            }
            else if(horario[5] === ':'){
                horario[5] = 'minuto(s)'
            }
           
        count++
    }

    console.log(horario.join(''), 'segundo(s)')


}


main()