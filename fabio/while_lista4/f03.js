import prompt from "prompt-sync"
const input = prompt()
function main(){
    const num1 = Number(input('Número 01: '))
    const num2 = Number(input('Número 02: '))

    let mdc
    //verifica qual é o maior valor
    if(num1 > num2){
        mdc = num1
    }
    else{
        mdc = num2
    }
    
    //pega o maior valor informado e decrementa ele até chegar em um valor 
    //que divide os dois ao mesmo tempo
    //se eu incrementasse, o while iria parar no primeiro valor que dividisse os dois ao mesmo tempo
    while(!(eh_divisor(mdc, num1) && eh_divisor(mdc, num2))){
        mdc--
    }
    
    console.log(mdc)
}
main()
function eh_divisor(mdc, num){
    return num % mdc === 0
}
