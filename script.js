// Selección de formularios
const loginForm = document.getElementById("login-form");
const registrarForm = document.getElementById("registrar-form");
const cambiarForm = document.getElementById("cambiar-form");
const recuperarForm = document.getElementById("recuperar-form");

// Función para mostrar un formulario y ocultar los demás
function showForm(form) {
  [loginForm, registrarForm, cambiarForm, recuperarForm].forEach(f => f.classList.remove("active"));
  form.classList.add("active");
}

// Enlaces para cambiar de formulario
document.getElementById("show-registrar").onclick = () => showForm(registrarForm);
document.getElementById("show-cambiar").onclick = () => showForm(cambiarForm);
document.getElementById("show-recuperar").onclick = () => showForm(recuperarForm);
document.getElementById("show-recuperar2").onclick = () => showForm(recuperarForm);

// Botones de volver a Login
document.getElementById("back-login1").onclick = () => showForm(loginForm);
document.getElementById("back-login2").onclick = () => showForm(loginForm);
document.getElementById("back-login3").onclick = () => showForm(loginForm);
