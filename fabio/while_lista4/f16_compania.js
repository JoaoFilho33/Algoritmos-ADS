import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let juros = 0
    let emprestimo = 3000 
    let count = 0
    while(emprestimo > 0){
        juros = (emprestimo * 0.0085) + emprestimo
        emprestimo -= 200

        count++
    }
    console.log(`São necessários ${count} dias úteis para pagar`)

}
main()