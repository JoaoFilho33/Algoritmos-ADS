import fs from 'fs'
import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const partidos = loadfile_partidos()

    let coligacao = {
        'coligacao': loadfile_partidos(),
        'total_votos': 0,
        'qtd_vagas': 0,
        'votos_sobra_total': 0
    }
    console.log(coligacao)

}
function loadfile_partidos(){
    try{
        const data = fs.readFileSync('partidos_coligacoes_the_2012.csv', 'utf-8')
        const palavras_carregadas = data.split('\n')
        return palavras_carregadas
    } catch (error){
        console.error(error)
    }
}

main()