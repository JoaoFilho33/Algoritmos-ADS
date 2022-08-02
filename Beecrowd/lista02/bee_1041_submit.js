function main(){
    const valores = lines[0].split(' ')
    const x = Number(valores[0])
    const y = Number(valores[1])

    if(x > 0 && y > 0){
        console.log('Q1')
    }
    else if(x < 0 && y > 0){
        console.log('Q2')
    }
    else if(x < 0 && y < 0){
        console.log('Q3')
    }
    else if(x > 0 && y < 0){
        console.log('Q4')
    }
    else if(x === y && y ===0){
        console.log('Origem')
    }
    else if(x === 0 && y !== 0){
        console.log('Eixo Y')
    }
    else if(y === 0 && x !== 0){
        console.log('Eixo X')
    }
}
main()