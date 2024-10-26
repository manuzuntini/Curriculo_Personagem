// Função para alterar o texto
function alterarTexto() {
    const paragrafo = document.getElementById("texto-alteravel");
    paragrafo.textContent = "Texto alterado com sucesso!";
}

// Variável para o contador
let contador = 0;

// Função para incrementar o contador
function incrementarContador() {
    contador++;
    document.getElementById("contador").textContent = "Contador: " + contador;
}

// Função para exibir informações do formulário
function exibirInformacoes(event) {
    event.preventDefault(); // Impede o envio do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    document.getElementById("informacoes").textContent = `Nome: ${nome}, E-mail: ${email}`;
}
