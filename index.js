// Seleciona todos os botões e personagens na tela
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Adiciona o evento de clique a cada botão
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desmarcarBotaoSelecionado();
    marcarBotaoComoSelecionado(botao);

    esconderPersonagemSelecionado();
    mostrarPersonagem(indice);
  });
});

/* ================= FUNÇÕES AUXILIARES ================= */

// Remove a classe "selecionado" do botão que já estiver selecionado
function desmarcarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

// Adiciona a classe "selecionado" ao botão clicado
function marcarBotaoComoSelecionado(botao) {
  botao.classList.add("selecionado");
}

// Remove a classe "selecionado" do personagem atualmente visível
function esconderPersonagemSelecionado() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

// Adiciona a classe "selecionado" ao personagem correspondente ao botão clicado
function mostrarPersonagem(indice) {
  personagens[indice].classList.add("selecionado");
}
