function main(){
    const valores = lines[0]
    const [A, B, C, D] = valores.split(' ').map(Number)

    if(valoresAceitos(A, B, C, D)){
        console.log('Valores aceitos')
    }
    else{
        console.log('Valores nao aceitos')
    }

    
}
main()
function valoresAceitos(A, B, C, D){
    const somaCD = C + D
    const somaAB = A + B
    const Apar = A % 2
    if(B > C && D > A && somaCD > somaAB && C > 0 && D > 0 && Apar === 0){
        return true
    }
    else{
        return false
    }
}