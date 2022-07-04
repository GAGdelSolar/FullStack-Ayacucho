var btnEnviar = document.getElementById("btnEnviar");
var captcha_usuario = document.getElementById("captcha_usuario");
var app = document.getElementById("app");
var validacion = document.getElementById("validacion");
var captcha;
var alphabets = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var first = alphabets[Math.floor(Math.random() * alphabets.length)];
var second = alphabets[Math.floor(Math.random() * alphabets.length)];
var third = alphabets[Math.floor(Math.random() * alphabets.length)];
var fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
var fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
var sixth = alphabets[Math.floor(Math.random() * alphabets.length)];
captcha =
    first.toString() +
    second.toString() +
    third.toString() +
    fourth.toString() +
    fifth.toString() +
    sixth.toString();


app.innerHTML = captcha;
btnEnviar.addEventListener("click", function () {
    var captcha_ingresada = captcha_usuario.value;
    if (captcha_ingresada == captcha) {
        validacion.innerHTML = "Gracias por contactarse con Coleccion Rosatto!";
    }
    else {
        validacion.innerHTML = "Captcha incorrecta, vuelva a intentarlo";
    }
});
