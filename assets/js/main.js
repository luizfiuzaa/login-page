// Declarando constante os botões
const btn_proceed = document.getElementById("proceed");
const btn_create = document.getElementById("create");
const secret = document.getElementById("secret");

// Caso o botão seja clicado, vai executar uma arrow function
btn_proceed.addEventListener("click", () => {
  // Declarando constante as informações dos inputs e do botão
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Variáveis para guardar email e senha para teste
  let dummy_email = "teste@exemplo.com";
  let dummy_password = "123";

  // se o valor do input 'email' for igual ao do dummy verificar se:
  if (email.value == dummy_email) {
    // o valor do input 'password' for igual ao do dummy
    if (password.value == dummy_password) {
      // Mensagem de boas vindas
      alert("Welcome!! :)");
      // Se a senha não igual:
    } else {
      // Alertar que a senha é invalida
      alert("O password não é valido");
    }
    // Se o email não for igual ao do dummy
  } else {
    // Alertar que o email é invalido
    alert("O email não é valido");
  }
});

btn_create.addEventListener("click", ()=>{
  alert("conta criada")
});

