
const jogador = prompt("Qual o seu nome? ");

      let op = 3;
      let pontuacao = 0;
      let resposta;

      function atualizarPontuacao(acertou) {
        if (acertou) {
          pontuacao++;
        }
      }
      function exibirMensagem(acertou, mensagemAcerto, mensagemErro) {
        if (acertou) {
          alert(mensagemAcerto);
        } else {
          alert(mensagemErro);
        }
      }
      while (op != 0) {
        op = parseInt(
          prompt(
            "Qual tema você deseja jogar?  1 - Futebol  2 - Games  3 - Música  0 - Sair "
          )
        );

        switch (op) {
          case 1:
            resposta = prompt(
              "A seleção Brasileira de Futebol, conquistou 5 Copas do Mundo. Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "verdadeiro") {
              mensagemAcerto: alert("Parabéns!");
              pontuacao++;
            } else {
              alert("Resposta incorreta.");
            }
            resposta = prompt(
              "Pelé foi eleito melhor jogador do mundo 7 vezes.  Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "verdadeiro") {
              mensagemAcerto: alert("Parabéns!");
              pontuacao++;
            } else {
              alert("Resposta incorreta.");
            }
            resposta = prompt(
              "O palmeiras tem mundial. Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "falso") {
              mensagemAcerto: alert("Parabéns!");
              pontuacao++;
            } else {
              alert("Resposta incorreta.");
            }
            break;

          case 2:
            resposta = prompt(
              "O game Gof Of War é exclusivo apenas para PlayStation. Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "verdadeiro") {
              mensagemAcerto: alert("Parabéns!");
              pontuacao++;
            } else {
              alert(
                "Resposta incorreta."
              );
            }
            resposta = prompt(
              "O console X-Box, foi criado pela Microsoft.  Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "verdadeiro") {
              mensagemAcerto: alert("Parabéns!");
              pontuacao++;
            } else {
              alert("Resposta incorreta.");
            }
            resposta = prompt(
              "GTA V, é o primeiro jogo mais vendido. Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "falso") {
              alert("Parabéns!");
              pontuacao++;
            } else {
              console.log(
                "Resposta incorreta." );
            }
            break;

          case 3:
            resposta = prompt(
              "A flauta é o instrumento mais antigo do mundo. Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "verdadeiro") {
              mensagemAcerto: alert("Parabéns!");
              pontuacao++;
            } else {
              alert("Resposta incorreta.");
            }
            resposta = prompt(
              "Nome do aparelho para marcar o tempo da música se chama metrônomo. Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "verdadeiro") {
                mensagemAcerto: alert("Parabéns.");
            } else {
                alert("Resposta Incorreta!");
              pontuacao++;
            }
            resposta = prompt(
              "O valor de uma semicolcheia é 1/6. Verdadeiro ou falso? "
            );
            if (resposta.toLowerCase() === "falso") {
              mensagemAcerto: alert("Parabéns!");
              pontuacao++;
            } else {
              alert("Resposta incorreta.");
            }
            break;

            function encerrarJogo() {
              alert(
                `Obrigado por jogar, ${jogador}! Sua pontuação foi: ${pontuacao}`
              );
              op = 0;
            }
        }
      }

      alert(`Obrigado por jogar, ${jogador}! Sua pontuação foi: ${pontuacao}`);