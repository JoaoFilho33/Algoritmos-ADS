function main(){
    const valores = lines[0]
    const [A, B, C] = valores.split(' ').map(Number)

    const delta = B*B - 4*A*C
    const raiz1 = (-B + Math.sqrt(delta)) / (2*A)
    const raiz2 = (-B - Math.sqrt(delta)) / (2*A)

    if(A === 0){
        console.log('Impossivel calcular')
    }
    else if(delta < 0){
        console.log('Impossivel calcular')
    }
    else{
        console.log(`R1 = ${raiz1.toFixed(5)}`)
        console.log(`R2 = ${raiz2.toFixed(5)}`)
    }
    
}
main()
