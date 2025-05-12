//definire domande

const tratta = parseFloat(prompt("Quanti km devi percorrere?") ) //number

console.log(tratta)

const eta = parseInt(prompt("quanti anni hai?")) //number

console.log(eta)

//definire prezzo

const COSTO_PER_KM = 0.21

const prezzo = tratta * COSTO_PER_KM //number

//definire sconto

    //calcolo 20% minorenni

const sconto20 = parseFloat(prezzo*20/100) //number

    //sconto 40% over 65

const sconto40 = parseFloat(prezzo*40/100) //number
 
    //applicazione sconto

if (eta>65) {
    console.log((prezzo-sconto40).toFixed(2)) 
}

else if(eta<18) {
    console.log((prezzo-sconto20).toFixed(2))
}

else {
    console.log((prezzo).toFixed(2))
}
        