// Seleciona o formulário
const form = document.getElementById("formContato");

// Evento de envio
form.addEventListener("submit", function(event) {

    event.preventDefault(); // impede envio padrão

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validação simples
    if(nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Validação básica de email
    if(!email.includes("@") || !email.includes(".")) {
        alert("Email inválido!");
        return;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso!");

    // Limpa formulário
    form.reset();
});