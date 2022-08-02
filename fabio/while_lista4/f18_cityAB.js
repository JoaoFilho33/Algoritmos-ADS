function main(){
    let cityA = 200000
    let cityB = 800000
    
    let count = 0
    
   while(cityA < cityB){
        cityA += 0.035 * cityA
        cityB += 0.0135 * cityB
        count++
    }

    console.log(`Levarão ${count} anos para a city A alcançar a city B`)
}
main()