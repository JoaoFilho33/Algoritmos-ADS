import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let canal_atual = ''
    let count = 0
    while(canal_atual !== 0){
        canal_atual += Number(input('Canal da sua TV agora: '))
        if(canal_atual === 0){
            break
        }
        for(let canal of canal_atual){
           if(canal[count] === canal_atual[count+1]){
                
           }
           console.log(canal)
        }
    }
}
main()