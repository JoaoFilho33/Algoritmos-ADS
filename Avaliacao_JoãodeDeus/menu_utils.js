import prompt from 'prompt-sync'
const input = prompt()

export function show_menu(){
    let menu = '*** MENU ***'
    menu += '\na - receber um valor numérico'
    menu += '\nb - Receber um valor numérico positivo'
    menu += '\nc - Receber um valor numérico negativo'
    menu += '\nd - Receber um valor numérico não nulo'
    menu += '\ne - Receber um valor numérico de valor mínimo N'
    menu += '\nf - Receber um valor numérico de valor máixmo N'
    menu += '\ng - Receber um valor numérico entre M e N'
    menu += '\nh - Receber um valor texto'
    menu += '\ni - Receber um valor texto de no mínimo N caracteres'
    menu += '\nj - Receber um valor texto de no máximo N caracteres'
    menu += '\nk - Receber um valor texto com tamanho M e N caracteres'
    menu += '\nl - Receber um valor texto de no máximo N palavras'
    menu += '\nm - Receber um valor texto de no mínimo N palavras'
    menu += '\nn - Receber um valor texto de acordo com listas de opções'
    menu += '\no - Receber uma data válida no padrão dd/MM/aaaa'

    menu += '\n0 - sair'
    console.log(menu)
}