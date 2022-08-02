import fs from 'fs'
var input = fs.readFileSync('1114.txt', 'utf8');
var lines = input.split('\n');
function main() {
    const senha = 2002

    let senha_tentativa = 0

    let count = 0
    while (senha_tentativa !== senha) {
        senha_tentativa = Number(lines[count])

        if (senha_tentativa !== senha) {
            console.log('Senha Invalida')
        }
        else {
            console.log('Acesso Permitido')
        }
        count++
    }

}


main()