import prompt from 'prompt-sync'
const input = prompt()
function main(){

  
    const valores = pedir_valores().split('\n')
    //const valores2 = Number(valores)
    
    console.log(valores)
   
}
main()
function pedir_valores(){ 
    let guardar = 0
    let contador = 0
    while(!(contador === 5)){
        const pedido = Number(input('\nInforme um valor: '))
        guardar += pedido
        contador ++
    }
    return guardar
}