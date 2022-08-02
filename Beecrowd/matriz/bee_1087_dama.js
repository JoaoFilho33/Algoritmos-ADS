import prompt from 'prompt-sync'
const input = prompt()
function main(){
    let [x1, x2, y1, y2] = input('> ').split(' ').map(Number)  

    while(x1+x2+y1+y2){
        if(for_na_mesma_casa(x1, x2, y1, y2)){

        }
        else if(for_na_mesma_linha(y1, y2)
        || for_na_mesma_coluna(x1, x2) 
        || for_na_mesma_diagonal(x1, x2, y1, y2)){

        }
        else{

        }

    }
}


main()