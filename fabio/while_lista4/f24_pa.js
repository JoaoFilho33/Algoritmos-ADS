import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const razao = Number(input('Razão: '))
    const primeiro = Number(input('Primeiro termo: '))
    const qtd_termos = Number(input('Quantidade de termos: '))

    let count = 0
    let pa = primeiro
    while(count < qtd_termos){
        console.log(pa)
        pa += razao
        count++
    }
}
main()