import prompt from 'prompt-sync'
const input = prompt()
function main() {
    const num_eleitores = Number(input('Número de eleitores: '))
    console.log('** Dados candidatos 1, 2, 3 **')
    console.log('** 9 = nulo,    0 = branco **')

    let voto = 0

    let candidato1 = 0
    let candidato2 = 0
    let candidato3 = 0
    let nulo = 0
    let branco = 0

    let vencedor = []

    let count = 0
    while (count < num_eleitores) {
        voto = Number(input('Seu voto => '))

        if (voto === 1) {
            candidato1++
            if(candidato1 > [candidato2 || candidato3]){
                vencedor = 'candidato 1'
            }
        }
        else if (voto === 2) {
            candidato2++
            if( candidato2 > [candidato1 || candidato3]){
                vencedor = 'candidato 2'
            }
        }
        else if (voto === 3) {
            candidato3++
            if (candidato3 > [candidato1 || candidato2])[
                vencedor = 'candidato 3'
            ]
        }
        else if (voto === 9) {
            nulo++
        }
        else if (voto === 0) {
            branco++
            
        }
        
        if(nulo > [candidato1 || candidato2 || candidato3]){
            vencedor = 'não há vencedores'
        }
        if(branco > [candidato1 || candidato2 || candidato3]){
            vencedor = 'não há vencedores'
        }

        count++
    }

    //const vitoria = descobrir_vencedor(candidato1, candidato2, candidato3, nulo, branco)

    
    


    console.log(`Candidato 1: ${candidato1} votos`)
    console.log(`Candidato 2: ${candidato2} votos`)
    console.log(`Candidato 3: ${candidato3} votos`)
    console.log(`Brancos: ${branco} votos`)
    console.log(`Nulos: ${nulo} votos`)
    console.log('** Vencedor **')
    console.log(`${vencedor}`)




}

function descobrir_vencedor(candidato1, candidato2, candidato3, nulo, branco){
    if(candidato1 > candidato2){
        return 'candidato 1'
    }
    else (candidato2 )
}


main()