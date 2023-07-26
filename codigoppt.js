//declaracion de variables
function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1) + min)
}
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "piedra"
    } else if (jugada == 2) {
        resultado = "papel"
    } else if (jugador == 3) {
        resultado = "tijera"
    } else {
        resultado = "por favor elige una opcion dentro del listado"
    }
    return resultado
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijera")
pc = aleatorio(1,3)
alert("Eligiste: " + eleccion(jugador))  
alert("PC eligio: " + eleccion(pc))

//combate
if(pc == jugador) {
    alert("Empate")
} else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
    alert("Ganaste")
    triunfos = triunfos + 1
} else {
    alert("Perdiste")
    perdidas = perdidas + 1
}
}

if(triunfos == 1) {
alert("Ganaste " + triunfos + " vez y perdiste " + perdidas + " veces.")
} else {
alert("Ganaste " + triunfos + " veces y perdiste " + perdidas + " veces.")
}