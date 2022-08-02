import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let matricula = 1
    let nota1 = 0
    let nota2 = 0
    let nota3 = 0
    let media_final = 0
    let count_aprovados = 0
    let count_reprovados = 0

    while(matricula > 0){
        matricula = Number(input('Matrícula: '))
        nota1 = Number(input('Nota 01: '))
        nota2 = Number(input('Nota 02: '))
        nota3 = Number(input('Nota 03: '))

        media_final = ((2*nota1) + (3*nota2) + (5*nota3))/10
        if(media_final >= 7){
            console.log('Aprovado')
            count_aprovados++
        }
        else{
            console.log('Reprovado')
            count_reprovados++
        }

    }
    console.log(`${count_aprovados} aprovados`)
    console.log(`${count_reprovados} reprovados`)

}
main()