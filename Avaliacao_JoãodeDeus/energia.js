import { criar_e_salvar_em_arquivo, fatura_mensal_unica } from './energia_utils.js'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const qtd_consumidores = Number(input('Número de famílias na pesquisa: '))
    let count = 0
    let vetor_informacoes

    while(count < qtd_consumidores){
        vetor_informacoes = new Array()

        vetor_informacoes[0] = input('Nome completo: ')
        vetor_informacoes[1] = Number(input('Consumo (KWh): '))
        vetor_informacoes[2] = input('Bandeira: ')

        const arquivo = input('Informe seu primeiro nome (esse será o nome do seu arquivo): ')
        const criar_salvar = criar_e_salvar_em_arquivo(vetor_informacoes, arquivo)

        console.clear()
        fatura_mensal_unica(arquivo)
        
        input('<enter> to continue')
        console.clear()
        count++
    }

}


main()