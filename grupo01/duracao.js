import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const momento1 = input('Momento 1 (hh:mm): ')
    const[hh1, mm1] = momento1.split(':').map(Number)
    const momento2 = input('Momento 2 (hh:mm): ')
    const[hh2, mm2] = momento2.split(':').map(Number)

    if(hh1 > hh2){
        console.log('Horário inválido')
    }
    else if(hh1 < hh2 && mm1 < mm2){
        
    }
    
}
main()