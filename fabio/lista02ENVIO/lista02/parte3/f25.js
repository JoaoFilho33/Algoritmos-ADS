//Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
//uma mensagem de permissão de acesso ou não.
import {input} from '../../io_utils.js'
function main(){
    const senha = Number(input('Digite a senha de acesso: '))

    if(senhaCorreta(senha)){
        console.log('Acesso permitido')
    }
    else {
        console.log('Acesso negado')
    }
}
main()
function senhaCorreta(senha){
    if(senha === 1234){
        return true
    }
    else{
        return false
    }
}