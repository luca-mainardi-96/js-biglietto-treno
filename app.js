//definire domande

const tratta = parseFloat(prompt("Quanti km devi percorrere?45") ) //number

console.log(tratta)

const eta = parseFloat(prompt("quanti anni hai?")) //number

console.log(eta)

//definire prezzo

const prezzo = (tratta*0.21).toFixed(2) //number

//definire sconto

    //calcolo 20% minorenni

const sconto20 = parseFloat(prezzo*20/100).toFixed(2) //number
        
    //sconto 40% over 65

const sconto40 = parseFloat(prezzo*40/100).toFixed(2) //number

    //applicazione sconto

if (eta>65) {
    console.log(prezzo-sconto40)
}

else if(eta<18) {
    console.log(prezzo-sconto20)
}

else {
    console.log(prezzo)
}
        