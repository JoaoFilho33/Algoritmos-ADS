import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const nome =  input('Nome completo: ').split(' ')
    let nome_companhia = new Array()

    escreve_ultimo_e_primeiro_nome(nome_companhia, nome)
        
    

    console.log(nome_companhia.join('/'))

}

function escreve_ultimo_e_primeiro_nome(novo_nome, nome){
    const tamanho = nome.length
    novo_nome[0] = nome[tamanho-1]
    novo_nome[1] = nome[0]
}
main()