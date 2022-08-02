import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const qtd_linhas = Number(lines[0])
    let saida = ''
    let i = 0
    let count_linhas = 1
    
    while(count_linhas <= qtd_linhas){
        i++

        if(i % 4 === 0){
            saida += 'PUM'
            console.log(saida)
            saida = ''
            count_linhas++
        }
        else{
            saida += `${i} `
        }
    }
}

main()