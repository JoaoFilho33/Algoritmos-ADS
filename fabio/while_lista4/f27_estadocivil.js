import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let sexo = 0
    let count_masculino = 0
    let count_feminino = 0
    //
    let idade = 0
    let idade_masculino = 0
    let idade_feminino = 0
    //
    let estado_civil = 0
    let count_casado = 0
    let count_solteiro = 0
    let count_divorciado = 0
    let count_viuvo = 0
    //
    let count_homem_solteiro = 0
    let count_mulher_solteira = 0
    //
    let count_mulher_divorciada = 0

    let count = 0
    while(count <= 100){
        console.log('***1=Masculino, 2=Feminino***')
        sexo = Number(input('Sexo: '))
        idade = Number(input('Idade: '))
        console.log('1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo')
        estado_civil = Number(input('Estado civil: '))

        if(sexo === 1){
            idade_masculino += idade
            count_masculino++
        }
        else if(sexo === 2){
            idade_feminino += idade
            count_feminino++
        }
        if(estado_civil === 1){//solteiros
            count_casado++
        }
        else if(estado_civil === 2){
            count_solteiro++
            if(sexo === 1){
                count_homem_solteiro++
            }
            else if(sexo === 2){
                count_mulher_solteira++
            }
        }
        else if(estado_civil === 3){
            count_divorciado++
            if(sexo ===2 && idade > 30){
                count_mulher_divorciada++
            }
        }
        count++
    }
    const media_idade_masculino = idade_masculino / count_masculino
    const media_idade_feminino = idade_feminino / count_feminino
    const percentual_homens_solteiros = (count_homem_solteiro * 100) / count_solteiro
    const percentual_mulheres_solteiras = (count_mulher_solteira * 100) / count_solteiro

    console.log('_______Tratamento de dados_______')
    console.log(`Média da idade das Mulheres: ${media_idade_feminino.toFixed(0)}`)
    console.log(`Média da idade dos homens: ${media_idade_masculino.toFixed(0)}`)
    console.log(`Percentual de homens solteiros: ${percentual_homens_solteiros}`)
    console.log(`Percentual de mulheres solteiras: ${percentual_mulheres_solteiras}`)
    console.log(`Quantitativo de mulheres divorciada acima de 30 anos: ${count_mulher_divorciada}`)



    

}
main()