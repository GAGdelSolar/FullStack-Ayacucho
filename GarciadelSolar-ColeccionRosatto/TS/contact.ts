let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let captcha_ = <HTMLInputElement>document.getElementById("captcha_");
let app = <HTMLParagraphElement>document.getElementById("app");
let validacion = <HTMLParagraphElement>document.getElementById("validacion");

let captcha: string;
let alphabets: string[] = new Array(
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
);

let first = alphabets[Math.floor(Math.random() * alphabets.length)];
let second = alphabets[Math.floor(Math.random() * alphabets.length)];
let third = alphabets[Math.floor(Math.random() * alphabets.length)];
let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
let sixth = alphabets[Math.floor(Math.random() * alphabets.length)];
captcha =
  first.toString() +
  second.toString() +
  third.toString() +
  fourth.toString() +
  fifth.toString() +
  sixth.toString();
console.log(captcha);
app.innerHTML = captcha;

btnEnviar.addEventListener("click", () => {
  let captcha_ingresada: string = captcha_.value;
  if (captcha_ingresada == captcha) {
    validacion.innerHTML = "Gracias por contactarse con Coleccion Rosatto!";
  } else {
    validacion.innerHTML = "Captcha incorrecta, vuelva a intentarlo";
  }
});
