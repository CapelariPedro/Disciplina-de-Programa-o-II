const loginForm = document.getElementById("login-form");
const loginBottun = document.getElementById("login-form-submit");
const loginMsgError = document.getElementById("login-error-msg");

loginBottun.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "aluno" && password === "exemplo@"){
        alert("Você fez login com sucesso !!!");
        location.reload();
    } else {
        loginMsgError.style.opacity = 1;
    }
});
