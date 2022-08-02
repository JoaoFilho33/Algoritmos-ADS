import prompt from 'prompt-sync'
const input = prompt()
function main(){
   const valor = Number(input('Digite um número: '))

   if(eh_positivo(valor)){
       console.log('O número digitado é positivo')
   }
   else{
       console.log('O número digitado é negativo')
   }

}
main()
function eh_positivo(valor){
    while(valor > 0){
        return true
    }
}