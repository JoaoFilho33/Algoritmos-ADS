import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const data = input('Data (DD/MM/AAAA): ').split('/')
    const [dia, mes, ano] = data.map(Number)

    const mes_extenso = show_mes_extenso(dia, mes, ano)

    console.log(mes_extenso)

}
main()

function show_mes_extenso(dia, mes, ano){
    if(mes === 1){
        return `${dia} de Janeiro ${ano}`
    }
    if(mes === 2){
        return `${dia} de Fevereiro ${ano}`
    }if(mes === 3){
        return `${dia} de Março ${ano}`
    }if(mes === 4){
        return `${dia} de Abril ${ano}`
    }if(mes === 5){
        return `${dia} de Maio ${ano}`
    }
    if(mes === 6){
        return `${dia} de Junho ${ano}`
    }if(mes === 7){
        return `${dia} de Julho ${ano}`
    }if(mes === 8){
        return `${dia} de Agosto ${ano}`
    }if(mes === 9){
        return `${dia} de Setembro ${ano}`
    }
    if(mes === 10){
        return `${dia} de Outubro ${ano}`
    }if(mes === 11){
        return `${dia} de Novembro ${ano}`
    }if(mes === 12){
        return `${dia} de Dezembro ${ano}`
    }
}