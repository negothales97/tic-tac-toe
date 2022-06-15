var rodada = 1;
var matriz_jogo = Array(3);
matriz_jogo['A'] = Array(3);
matriz_jogo['B'] = Array(3);
matriz_jogo['C'] = Array(3);

matriz_jogo['A'][1] = 0;
matriz_jogo['A'][2] = 0;
matriz_jogo['A'][3] = 0;

matriz_jogo['B'][1] = 0;
matriz_jogo['B'][2] = 0;
matriz_jogo['B'][3] = 0;

matriz_jogo['C'][1] = 0;
matriz_jogo['C'][2] = 0;
matriz_jogo['C'][3] = 0;


$( document ).ready ( function(){
	
	$('#btn_inciar_jogo').click(function(){
		//valida a digitação dos apelidos dos jogadores
		if ($('#player_1').val() == '' || $('#player_2').val() == '') {
			alert('Um dos jogadores não preencheu o Apelido');
			return false;
		}
		else{
			//Atribui os valores do apelido a cada player
			$('#nome_player1').html($('#player_1').val());
			$('#nome_player2').html($('#player_2').val());

			//Esconde tela de validação e mostra o palco do jogo
			$('#pagina_inicial').hide();
			$('#palco_jogo').show();
		}
	});

	$('.jogada').click(function(){
		var id_click = this.id;
		$('#' + id_click). off();
		jogada(id_click);
	});

	function jogada(id){
		var icone = ''
		var ponto = 0;


		if ((rodada%2) == 1) {
			icone = 'url("imagens/marcacao_1.png")';
			ponto = -1;			
		}
		else{
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		}
		rodada++;
		$('#'+id).css('background-image',icone);
		var linha_coluna = id.split('-');

		matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
		
		verifica_combinacao();

	}

	function verifica_combinacao(){
		/*****VERIFICAÇÃO NA HORIZONTAL*****/
		//verifica horizontal linha A
		var pontos = 0;
		for(var i= 1; i <4; i++){
			pontos = pontos + matriz_jogo['A'][i];

		}
		ganhador(pontos);
		pontos = 0;
		
		//verifica horizontal linha B
		var pontos = 0;
		for(var i= 1; i <4; i++){
			pontos = pontos + matriz_jogo['B'][i];

		}
		ganhador(pontos);
		pontos = 0;
		
		//verifica horizontal linha C
		var pontos = 0;
		for(var i= 1; i <4; i++){
			pontos = pontos + matriz_jogo['C'][i];

		}
		ganhador(pontos);

		/*****VERIFICAÇÃO NA VERTICAL*****/
		//verifica vertical colunas
	
		for(var l= 1; l <4; l++){
			pontos = 0;
			pontos += matriz_jogo['A'][l];
			pontos += matriz_jogo['B'][l];
			pontos += matriz_jogo['C'][l];
			ganhador(pontos);

		}

		/*****VERIFICAÇÃO NA DIAGONAL*****/
		pontos = 0;

		pontos = matriz_jogo['A'][1] + matriz_jogo['B'][2] + matriz_jogo['C'][3];
		ganhador(pontos);

		pontos = 0;

		pontos = matriz_jogo['A'][3] + matriz_jogo['B'][2] + matriz_jogo['C'][1];
		ganhador(pontos);

	}



	//Mensagem do vencedor
	function ganhador(pontos){
		if (pontos == -3) {
			var jogada_1 = $('#player_1').val();
			alert(jogada_1 + ' é o vencedor');
			$('.jogada').off();
		}
		else if (pontos == 3) {
			var jogada_2 = $('#player_1').val();
			alert(jogada_2 + ' é o vencedor');
			$('.jogada').off();
		}
	}




});