import prompt from 'prompt-sync'
const input = prompt({sigint:false})

function main(){
    console.log("***CALCULAR FREQUÊNCIA CARDÍACA MÁXIMA***")
    const idade = Number(input("Idade: "))
    const frequenciaAtual = Number(input("Frequência atual: "))
    //processamaneto
    const frequenciaFC = 220 - idade
    const atvModerada_incial = frequenciaFC * 0.5
    const  atvModerada_final = frequenciaFC * 0.59

    const controlePeso_inicial = frequenciaFC * 0.6
    const controlePeso_final = frequenciaFC * 0.69

    const aerobica_inifcial = frequenciaFC * 0.7
    const aerobica_final = frequenciaFC * 0.79

    const anaerobic_inicial = frequenciaFC * 0.8
    const anaerobica_final = frequenciaFC * 0.89

    const esforcoMax_incial = frequenciaFC * 0.9
    const esforcoMax_final = frequenciaFC * 1

    const aonde_fc_atual = comparar_fc(frequenciaAtual, idade)
         

     console.log(`Atividade moderada: [${atvModerada_incial.toFixed(2)}, ${atvModerada_final.toFixed(2)})`)
     console.log(`controle de peso: [${controlePeso_inicial.toFixed(2)} , ${controlePeso_final.toFixed(2)})`)
     console.log(`Aeróbica: [${aerobica_inifcial.toFixed(2)} , ${aerobica_final.toFixed(2)})`)
     console.log(`Anaeróbica: [${anaerobic_inicial.toFixed(2)}, ${anaerobica_final.toFixed(2)})`)
     console.log(`Esforço máximo: [${esforcoMax_incial.toFixed(2)}, ${esforcoMax_final.toFixed(2)}]`)
     console.log(`A frequencia Cardíaca atual (${frequenciaAtual.toFixed(2)}) e está na zona ${aonde_fc_atual}`)


}
main()
function comparar_fc(frequenciaAtual, idade){
    const frequenciaFC = 220 - idade
    const atvModerada_inicial = frequenciaFC * 0.5
    const  atvModerada_final = frequenciaFC * 0.59

    const controlePeso_inicial = frequenciaFC * 0.6
    const controlePeso_final = frequenciaFC * 0.69

    const aerobica_inicial = frequenciaFC * 0.7
    const aerobica_final = frequenciaFC * 0.79

    const anaerobica_inicial = frequenciaFC * 0.8
    const anaerobica_final = frequenciaFC * 0.89

    const esforcoMax_inicial = frequenciaFC * 0.9
    const esforcoMax_final = frequenciaFC * 1

    if(frequenciaAtual > atvModerada_inicial && frequenciaAtual < atvModerada_final){
        return 'Atividade Moderada'
    }
    else if(frequenciaAtual > controlePeso_inicial && frequenciaAtual < controlePeso_final){
        return 'Controle de Peso'
    }
    else if(frequenciaAtual > aerobica_inicial && frequenciaAtual < aerobica_final){
        return 'Aeróbica'
    }
    else if(frequenciaAtual > anaerobica_inicial && frequenciaAtual < anaerobica_final){
        return 'Anaeóbica'
    }
    else if(frequenciaAtual > esforcoMax_inicial && frequenciaAtual < esforcoMax_final){
        return 'Esforço Máximo'
    }

}