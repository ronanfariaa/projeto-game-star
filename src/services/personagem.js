import base from "./base";

export function listarConsultas(callback){
    fetch(`${base}/personagem`)
    .then(resultado => resultado.json().then(callback));
}