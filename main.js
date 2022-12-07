/*funçao creatgame recebendo os parametros player, hora e player 2  */
function creatGame(player1, hour, player2){
    return `
        <li>
            <img src="./imgsvg/icon-${player1}.svg" alt="icone do Brazil">
                <strong>${hour}</strong>
            <img src="./imgsvg/icon-${player2}.svg" alt="icon da Servia">
        </li>
    
    `
}

let delay = -0.2; /* declarei a variavel com -0,3 */
/*função creat card recebendo os parametros date, day, games */
function creatCard(date, day, games){
    delay = delay + 0.2; 
     /*a função vai rodar e chamar a variavel e sempre que ela rodar vai executar somando + 0.3s */
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
              ${games}
                
            </ul>
        </div>
    `
}


document.querySelector('#cards')/* # chama a ID */.innerHTML = /*iner vai adicionar um novo texto dentro da id cards */
/*refatoração/limpando o codigo */
    /*creatcard é a função criada, cada parensete vai em um parametro da fução criada */
    creatCard('20/11','DOMINGO',
      creatGame("qatar", "13:00", "equador"))
      /* creatgame é a função criada, cada parentese vai em cada parametro da função criada */

    + creatCard('21/11','SEGUNDA-feira',
        creatGame("englaterra", "13:00", "irã") +
        creatGame("senegal", "13:00", "holanda") +
        creatGame("estados-unidos", "16:00", "paisdegales"))

    + creatCard('22/12','TERÇA-feira',
        creatGame("argentina", "07:00", "arabia") +
        creatGame("dinamarca", "10:00", "tunisia") +
        creatGame("mexico", "13:00", "polonia") +
        creatGame("france", "16:00" , "australia"))

    + creatCard('23/12','QUARTA-feira',
        creatGame("marroco", "07:00", "croatia") + 
        creatGame("alemanha", "10:00", "japao") +
        creatGame("spanha", "13:00", "costarica") + 
        creatGame("belgica", "16:00", "canada"))

    + creatCard('24/12','QUINTA-feira',
        creatGame("suiça", "07:00", "camarões") + 
        creatGame("uruguay", "10:00", "coreia") +
        creatGame("portugal", "13:00", "gana") +
        creatGame("brazil", "16:00", "serbia"))

    + creatCard('25/12','SEXTA-feira',
        creatGame("paisdegales", "07:00", "irã") + 
        creatGame("qatar", "10:00", "senegal") + 
        creatGame("holanda", "13:00", "equador") +
        creatGame("englaterra", "16:00", "estados-unidos"))

    + creatCard('26/12','SABADO',
        creatGame("tunisia", "07:00", "australia") +
        creatGame("polonia", "10:00", "arabia") +
        creatGame("france", "13:00", "dinamarca") +
        creatGame("argentina", "16:00", "mexico"))

    + creatCard('27/12','DOMINGO',
        creatGame("japao", "07:00", "costarica") +
        creatGame("belgica", "10:00", "marroco") +
        creatGame("croatia", "13:00", "canada") +
        creatGame("spanha", "16:00", "alemanha"))

    + creatCard('28/12','SEGUNDA-feira',
        creatGame("camarões", "07:00", "serbia") +
        creatGame("coreia", "10:00", "gana") +
        creatGame("brazil", "13:00", "suiça") +
        creatGame("portugal", "16:00", "uruguay"))

    + creatCard('29/12','TERÇA-feira',
        creatGame("equador", "07:00", "senegal") +
        creatGame("holanda", "10:00", "qatar") +
        creatGame("irã", "13:00", "estados-unidos") +
        creatGame("paisdegales", "16:00", "englaterra"))

    + creatCard('30/12','QUARTA-feira',
        creatGame("tunisia", "07:00", "france") +
        creatGame("australia", "10:00", "dinamarca") +
        creatGame("polonia", "13:00", "argentina") +
        creatGame("arabia", "16:00", "mexico"))

    + creatCard('01/12','QUINTA-feira',
        creatGame("croatia", "07:00", "belgica") +
        creatGame("canada", "10:00", "marroco") +
        creatGame("japao", "13:00", "spanha") +
        creatGame("costarica", "16:00", "alemanha"))

    + creatCard('02/12','SEXTA-feira',
        creatGame("coreia", "07:00", "portugal") +
        creatGame("gana", "10:00", "uruguay") +
        creatGame("serbia", "13:00", "suiça") +
        creatGame("camarões", "16:00", "brazil"))

/*` codigo sujo 
    ${creatCard('24/11','segunda-feira',
      creatGame("brazil", "16:00", "serbia"))}
    ${creatCard('28/11','terça-feira',
      creatGame("suiça", "13:00", "brazil"))}
    ${creatCard('02/12','sexta-feira',
      creatGame("brazil", "16:00", "serbia"))}
` */