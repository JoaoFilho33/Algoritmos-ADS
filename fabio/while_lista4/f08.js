import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let x = Number(input('Número: '))

    let candidato_a_soma1  
    let candidato_a_soma2 

    while(candidato_a_soma1 + candidato_a_soma2 !== x){
        candidato_a_soma1 = Number(input('Número: '))
        if(candidato_a_soma1 === 0){
            candidato_a_soma2 = x
        }
        else{
            candidato_a_soma2 = Number(input('Número: '))
        }
         
    }
}
main()