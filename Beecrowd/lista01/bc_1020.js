import {input} from "./io_utils.js"

function main(){
    const idade_dias = Number(input(': '))
    
    var anos = Math.trunc(idade_dias / 365)
    var resto = idade_dias % 365
    
    var meses = Math.trunc(resto / 30)
    var resto1 = resto % 30
    
    var dias = resto1
    
    console.log(`${anos} anos(s)`)
    console.log(`${meses} mes(es)`)
    console.log(`${dias} dia(s)`)
    
    }
main()