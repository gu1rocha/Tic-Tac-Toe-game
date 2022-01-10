var box = document.querySelector('.box');
var item = box.querySelectorAll('.item');
var refresh = document.querySelector('.refresh');
var boxTurn = document.querySelector('.turn');
var turn = boxTurn.querySelector('.fas');

var textPlay1 = document.querySelector('.score.player1').querySelector('.value');
var textPlay2 = document.querySelector('.score.player2').querySelector('.value');
var textDraw = document.querySelector('.score.draw').querySelector('.value');

var finallyBox = document.querySelector('.boxFinally')
var next = finallyBox.querySelector('.next')

var jogador = '_'
var vencedor = '_'
var Empate = 0
var play1 = 0, play2 = 0, draw  = 0;

for(var i=0; i<9; i++) {
	item[i].addEventListener('click', (event) => {
		if( !(event.target.classList.contains("ativo")) && (vencedor=='_')) {
			event.target.querySelector('.fas').classList.add(`${jogador}`); //preenche a casa com X ou O
            event.target.classList.add("ativo");

            vencedor = vitoria(jogador);
            if(vencedor == 'fa-times'){
                textPlay1.textContent = ++play1
                finallyBox.style.display = 'flex'
            }else if(vencedor == "fa-dot-circle"){
                textPlay2.textContent = ++play2
                finallyBox.style.display = 'flex'
            }
            Empate = empate();
            if(vencedor=='_' && Empate > 8){
                textDraw.textContent = ++draw
                finallyBox.style.display = 'flex'
            }

			trocarJogador(); 
		}
	});
}

next.addEventListener('click', (event) => refreshGame());

refresh.addEventListener('click', (event) => refreshGame());

var refreshGame = () =>{
	for(var i=0;i<9;i++) {
		item[i].classList.remove("ativo");
		item[i].classList.remove("fatimes");
		item[i].classList.remove("fadotcircle");
		item[i].querySelector('.fas').classList.remove("fa-times");
		item[i].querySelector('.fas').classList.remove("fa-dot-circle");
	}
    finallyBox.style.display = 'none'
    vencedor = '_'
    sortearJogador()
}

var sortearJogador = function() {
	if(Math.floor(Math.random() * 2)==0) {
		jogador = "fa-dot-circle"; 
		turn.classList.remove("fa-times");
        turn.classList.add("fa-dot-circle");
	}else{
		jogador = "fa-times";
		turn.classList.remove("fa-dot-circle");
        turn.classList.add("fa-times");
	}
}

sortearJogador();

var trocarJogador = function() {
	if(jogador=='fa-times') {
		jogador='fa-dot-circle';
		turn.classList.remove("fa-times");
        turn.classList.add("fa-dot-circle");
		
	}else{
		jogador='fa-times';
		turn.classList.remove("fa-dot-circle");
        turn.classList.add("fa-times");
	}
}

var vitoria = (jogador) => {

    if(item[0].querySelector('.fas').classList.contains(`${jogador}`)  && item[1].querySelector('.fas').classList.contains(`${jogador}`) && item[2].querySelector('.fas').classList.contains(`${jogador}`)){
        item[0].classList.add(`${jogador.replaceAll('-','')}`); item[1].classList.add(`${jogador.replaceAll('-','')}`); item[2].classList.add(`${jogador.replaceAll('-','')}`);
        return jogador
    }
    else if(item[3].querySelector('.fas').classList.contains(`${jogador}`)  && item[4].querySelector('.fas').classList.contains(`${jogador}`) && item[5].querySelector('.fas').classList.contains(`${jogador}`)){
        item[3].classList.add(`${jogador.replaceAll('-','')}`); item[4].classList.add(`${jogador.replaceAll('-','')}`); item[5].classList.add(`${jogador.replaceAll('-','')}`);
        return jogador
    }
    else if(item[6].querySelector('.fas').classList.contains(`${jogador}`)  && item[7].querySelector('.fas').classList.contains(`${jogador}`) && item[8].querySelector('.fas').classList.contains(`${jogador}`)){
        item[6].classList.add(`${jogador.replaceAll('-','')}`); item[7].classList.add(`${jogador.replaceAll('-','')}`); item[8].classList.add(`${jogador.replaceAll('-','')}`);
        return jogador
    }
    else if(item[0].querySelector('.fas').classList.contains(`${jogador}`)  && item[3].querySelector('.fas').classList.contains(`${jogador}`) && item[6].querySelector('.fas').classList.contains(`${jogador}`)){
        item[0].classList.add(`${jogador.replaceAll('-','')}`); item[3].classList.add(`${jogador.replaceAll('-','')}`); item[6].classList.add(`${jogador.replaceAll('-','')}`);
        return jogador
    }
    else if(item[1].querySelector('.fas').classList.contains(`${jogador}`)  && item[4].querySelector('.fas').classList.contains(`${jogador}`) && item[7].querySelector('.fas').classList.contains(`${jogador}`)){
        item[1].classList.add(`${jogador.replaceAll('-','')}`); item[4].classList.add(`${jogador.replaceAll('-','')}`); item[7].classList.add(`${jogador.replaceAll('-','')}`);
        return jogador
    }
    else if(item[2].querySelector('.fas').classList.contains(`${jogador}`)  && item[5].querySelector('.fas').classList.contains(`${jogador}`) && item[8].querySelector('.fas').classList.contains(`${jogador}`)){
        item[2].classList.add(`${jogador.replaceAll('-','')}`); item[5].classList.add(`${jogador.replaceAll('-','')}`); item[8].classList.add(`${jogador.replaceAll('-','')}`);
        return jogador
    }
    else if(item[0].querySelector('.fas').classList.contains(`${jogador}`)  && item[4].querySelector('.fas').classList.contains(`${jogador}`) && item[8].querySelector('.fas').classList.contains(`${jogador}`)){
        item[0].classList.add(`${jogador.replaceAll('-','')}`); item[4].classList.add(`${jogador.replaceAll('-','')}`); item[8].classList.add(`${jogador.replaceAll('-','')}`);
        return jogador
    }
    else if(item[2].querySelector('.fas').classList.contains(`${jogador}`)  && item[4].querySelector('.fas').classList.contains(`${jogador}`) && item[6].querySelector('.fas').classList.contains(`${jogador}`)){
        item[2].classList.add(`${jogador.replaceAll('-','')}`); item[4].classList.add(`${jogador.replaceAll('-','')}`); item[6].classList.add(`${jogador.replaceAll('-','')}`);
        return jogador
    }
    else{
        return '_';
    }
}

var empate = () => {
    let cont = 0;
    for(let i=0; i<9; i++) {
        if(item[i].classList.contains("ativo")){
            cont++;
        }
    }
    return cont;
}
