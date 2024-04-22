
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("O que você gostaria de saber sobre estelionato?");

    
    if (respostaTime.toLowerCase() === "Nada! Isso é crime!") {
      alert("Isso mesmo!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
