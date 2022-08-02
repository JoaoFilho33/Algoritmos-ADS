import fs from 'fs'
var input = fs.readFileSync('1277.txt', 'utf8');
var lines = input.split('\n');
function main(){
    const num_casos = Number(lines[0])
    let qtd_alunos
    let nome_total
    let nome_individual
    let frequencia_total
    let frequencia_individual
    let alunos_faltosos = []
    let faltas
    let count = 1

    for(let i = 0; i < num_casos; i++){
        qtd_alunos = Number(lines[count])
        count++
        nome_total = lines[count].split(' ')
        count++
        frequencia_total = lines[count].split(' ')
        alunos_faltosos = []

        for(let j = 0, k = 0; j < qtd_alunos; j++){
            nome_individual = nome_total[j]
            frequencia_individual = frequencia_total[j]

            faltas = percentual_de_faltas(frequencia_individual)
            if(contar_elementos(frequencia_individual, 'M') !== frequencia_individual.length){
                if(faltas > 25){
                    alunos_faltosos[k] = nome_individual
                    k++
                }
            }
        }
        console.log(alunos_faltosos.join(' '))
        count++
    }
}
function percentual_de_faltas(frequencia){
    const frequencia_dia = frequencia.split('')
    let faltas = 0
    let faltas_justificadas = 0

    for(let i = 0; i < frequencia_dia.length; i++){
        if(frequencia_dia[i] === 'A'){
            faltas++
        }
        else if(frequencia_dia[i] === 'M'){
            faltas_justificadas ++
        }
    }
    const percentual_faltas = (faltas * 100) / (frequencia.length - faltas_justificadas)

    return percentual_faltas

}

function contar_elementos(frequencia, elemento){
    let quantidade = 0
    for(let i = 0; i < frequencia.length; i++){
        if(frequencia[i] === elemento){
            quantidade++
        }
    }
    return quantidade
}

main()