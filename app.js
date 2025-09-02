// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");
function agregarAmigo() {
    if (inputAmigo.value === "") {
        alert("Por favor ingrese nombre");
        return;
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = "";
};

function sortearAmigo() {
    let random = Math.floor((Math.random() * listaAmigos.length));
    let amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es : ${amigoSecreto}</li>`;
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
};