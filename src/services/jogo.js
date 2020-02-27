import base from "./base";

export function consultarResumo(callback){
    fetch(`${base}/jogo`)
    .then(resultado => resultado.json().then(callback));
}