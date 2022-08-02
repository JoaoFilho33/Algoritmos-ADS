import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const senha = input('Senha: ')
    let senha_criptografada = senha.split('')
    
    for(let i=0; i < senha_criptografada.length; i++){
        senha_criptografada[i] = '#'
    }

    console.log(senha_criptografada.join(''))
    input('<enter> to continue...')
    console.clear()

    const senha_login = input('Digite sua senha: ')
    if(senha_login === senha){
        console.log('Senha correta!')
    }
    else{
        console.log('Senha incorreta!')
    }
    

}


main()