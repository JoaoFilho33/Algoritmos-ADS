import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const preco = input('Informe 3 valores: ')
    const [p1, p2, p3] = preco.split(' ').map(Number)
    

    if(p1 > p2){
        if(p2 > p3){
            console.log('O TERCEIRO valor é o menor')
        }
        else{
            console.log('O SEGUNDO valor é o menor')
        }
    }
    else if(p3 > p2){
        console.log('O PRIMEIRO valor é o menor.')
    }
   else{
       console.log('Os valores são iguais')
   }
}
main()