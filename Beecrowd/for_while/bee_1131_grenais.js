// import prompt from 'prompt-sync'
// const input = prompt()
import fs from 'fs'
var input = fs.readFileSync('1131.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let count_grenal = 0
    let gols
    let inter, gremio
    let continua
    let vitorias_inter = 0
    let vitorias_gremio = 0
    let empates = 0
    let count2 = 0


    while(continua !== 2){
        gols = lines[count2].split(' ').map(Number)
        count2++
        inter = gols[0]
        gremio = gols[1]

        if(inter > gremio){
            vitorias_inter++
        }
        else if(gremio > inter){
            vitorias_gremio++
        }
        else{
            empates++
        }

            console.log('Novo grenal (1-sim 2-nao)')
            continua = Number(lines[count2])
            count2++
            count_grenal++
    }

    
    console.log(`${count_grenal} grenais`)
    console.log(`Inter:${vitorias_inter}`)
    console.log(`Gremio:${vitorias_gremio}`)
    console.log(`Empates:${empates}`)
    
    const vencedor = venceu_mais(vitorias_inter,vitorias_gremio)

    console.log(vencedor)

}

function venceu_mais(vitorias_inter,vitorias_gremio){
    if(vitorias_inter > vitorias_gremio){
        return 'Inter venceu mais'
    }
    else if(vitorias_gremio > vitorias_inter){
        return 'Gremio venceu mais'
    }
    else{
        return 'Nao houve vencedor'
    }
}

main()