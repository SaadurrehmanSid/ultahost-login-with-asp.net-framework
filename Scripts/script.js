function togglePassword() {
    var passwordInput = document.getElementById("InputPassword1");
    var type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
}

