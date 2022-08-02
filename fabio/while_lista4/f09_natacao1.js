import prompt from 'prompt-sync'
const input = prompt()
/*
    1 - Crie uma variável para receber o número da prova;
    2 - Para automatizar o número de provas, tome essa variável como sendo o número de provas da competição

        Então, enquanto o número de provas não for igual a 0, em cada prova faça o trabalho que será descrito nos próximos passos;
    3 - Inicie esse trabalho mostrando para o usuário em que partida ele está, faça isso para todas as provas;
    4 - Após isso, pergunte a quantidade de nadadores dentro da prova atual
        1 - E crie uma condição que funcione enquanto o número de nadadores informados for maior que 0;
    5 - Pergunte: Nome, classificação, tempo de prova e clube (a ou b);
    6 - Dessa forma, após o recebimento desses dados, busque a posição de cada nadador através de condições;
    7 - Para saber a posição de cada participante: se no campo "clube" for digitado "a" e a "classificação" for menor ou igual a 4 (dessa forma, 
        facilita o tratamento de classificações maiores que 4, pois elas não serão bonificadas). Compare se essa "classificação" recebeu um
        valor: 4(3 pontos), 3(4 pontos), 2(6 pontos), 1(9 pontos); 
        *Armazene esses resultados individuais dentro de uma variável coletiva(que guarde a pontuação de todos os nadadores)*
        1 - Crie outra condição semelhante a anterior, para se "clube" receber "b";
        2 - Após fazer o tratamento das pontuações menores ou iguais a 4. Crie uma condição, para se nenhuma das anteriores for atendida
        fazendo com que a pontuação desse nadador seja 0;
    10 - Após finalizado esse trabalho, o nadador atual já terá sua pontuação. E por isso, peça os dados do próximo nadador, de modo que
        sejam tratados como o anterior;
    11 - Esse tratamento de dados será feito enquanto as provas não chegarem ao fim;
    12 - Após as provas serem finalizadas, crie condições para saber qual o time vencedor;
    13 - Para isso, pergunte se a pontuação do time A é maior que a do time B, se sim, então o time A é o vencedor
        1 - Se não, pergunte se A é igual a B, se sim, ocorreu um Empate
        2 - Se nenhuma das condições acima for atendida, então o time B é o vencedor.

*/
function main() {
    let num_prova = Number(input('Número de provas: '))
    let qtd_nadadores
    let nome = ''
    let classificacao = 0
    let tempo = 0
    let clube = ''
    let pontuacao = 0
    let pontuacao_a = 0
    let pontuacao_b = 0


    while (num_prova !== 0) {
        console.log(`\t*** Prova (${num_prova}) ***`)
        if (num_prova === 0) {
            break
        }
        qtd_nadadores = Number(input('Qtd de nadadores: '))
        while (qtd_nadadores > 0) {
            show_dados_do_jogador(nome, classificacao, tempo, clube, qtd_nadadores)
            

            if (clube === 'a' && classificacao <= 4) {
                pontuacao = classificacao_se_clube_for_a(classificacao)
                pontuacao_a += pontuacao
            }
            else if (clube === 'b' && classificacao <= 4) {
                pontuacao = classificacao_se_clube_for_b(classificacao)
                pontuacao_b += pontuacao
            }
            else {
                pontuacao = 0
            }
            show_pontuacao_atual_de_cada_time(pontuacao, pontuacao_a, pontuacao_b)

            qtd_nadadores--
        }
        num_prova--

    }

    if (pontuacao_a > pontuacao_b) {
        console.log('O time A é o campeão')
    }
    else if( pontuacao_a ===  pontuacao_b){
        console.log('Empate')
    }
    else {
        console.log('O time B é o campeão')
    }
}

function classificacao_se_clube_for_a(classificacao) {
    let pontuacao = 0
    if (classificacao === 4) {
        pontuacao = 3
    }
    else if (classificacao === 3) {
        pontuacao = 4
    }
    else if (classificacao === 2) {
        pontuacao = 6
    }
    else if (classificacao === 1) {
        pontuacao = 9
    }

    return pontuacao
}

function classificacao_se_clube_for_b(classificacao) {
    if (classificacao === 4) {
        pontuacao = 3
    }
    else if (classificacao === 3) {
        pontuacao = 4
    }
    else if (classificacao === 2) {
        pontuacao = 6
    }
    else if (classificacao === 1) {
        pontuacao = 9
    }

    return pontuacao
}

function show_pontuacao_atual_de_cada_time(pontuacao, pontuacao_a, pontuacao_b) {
    console.log(`O Nadador ${nome} recebeu ${pontuacao} pontos`)
    console.log(`O time A está com ${pontuacao_a} pontos`)
    console.log(`O time B está com ${pontuacao_b} pontos`)
}

function show_dados_do_jogador(nome, classificacao, tempo, clube, qtd_nadadores){
    nome = input(`Nome do nadador (${qtd_nadadores}): `)
    classificacao = Number(input(`Classificação: `))
    tempo = Number(input(`Tempo: `))
    clube = input('Clube (a ou b): ')
}



main()