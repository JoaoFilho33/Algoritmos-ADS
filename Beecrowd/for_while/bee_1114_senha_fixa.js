import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const senha = 2002

    let senha_tentativa = 0

    while (senha_tentativa !== senha) {
        senha_tentativa = Number(input(': '))

        if (senha_tentativa !== senha) {
            console.log('Senha Invalida')
        }
        else {
            console.log('Acesso Permitido')
        }
    }

}


main()