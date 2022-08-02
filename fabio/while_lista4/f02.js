import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const num1 = Number(input('Número 01: '))
    const num2 = Number(input('Número 02: '))
    let mmc = 1
    
    while(!(mmc % num1 === 0 && mmc % num2 === 0)){
        mmc++
    }

    console.log(mmc)
}
main()
/*
if(num2 > num1){
        if(num2 % num1 === 0){
            mmc = num2
            console.log(mmc)
        }
        else{
            mmc = num2 * num1
            console.log(mmc)
        }
    }
if(num1 > num2){
        if(num1 % num2 === 0){
            mmc = num1
            console.log(mmc)
        }
        else{
            mmc = num2 * num1
            console.log(mmc)
        }
    }
*/