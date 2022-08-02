import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const idade = Number(input('Idade: '))
    const fc_atual = Number(input('Freqência cardíaca atual: '))

    console.log(`Zona: ${em_qual_zona(idade, fc_atual)}`)
    console.log(`FC Max Atividade Moderada: ${fc_am(idade)}`)
    console.log(`FC Max Controle de Peso: ${fc_cp(idade)}`)
    console.log(`FC Max Aerobica: ${fc_aerobica(idade)}`)
    console.log(`FC Max Anaerobica ${fc_anaerobica(idade)}`)
    console.log(`FC Max Atividade Moderada: ${fc_am(idade)}`)


}
function fc_am(idade){
    return (220 - idade) * 0.599
}

function fc_cp(idade){
    return (220 - idade) * 0.699
}

function fc_aerobica(idade){
    return (220 - idade) * 0.799
}

function fc_anaerobica(idade){
    return (220 - idade) * 0.899
}

function em_qual_zona(idade, fc_atual){
    const fc_max = (220 - idade)
    const percentual = ((fc_atual / fc_max) * 100).toFixed(2)

    if(percentual >= 50 && percentual < 60){
        return 'Atividade Moderada'
    }
    else if(percentual >= 60 && percentual < 70){
        return 'Controle de Peso'
    }
    else if(percentual >= 70 && percentual < 80){
        return 'Aeróbica'
    }
    else if(percentual >= 80 && percentual < 90){
        return 'Anaeróbica'
    }
    else if(percentual >= 90 && percentual < 100){
        return 'Esforço Máximo'
    }
}



main()