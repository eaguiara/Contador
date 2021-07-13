window.addEventListener("load", () => {

//tempo em seg
let sec = 360;
const countDiv = document.getElementById("timer");


const secpass = () => {
    let min = Math.floor(sec/60);
    let segundosRestante = sec % 60

    if(segundosRestante < 10){
        segundosRestante = "0" + segundosRestante;
    }

    if(min < 10){
        min = "0" + min;
    }

    //Vai gerar o formatro de 02:59
    countDiv.innerHTML = min + ":" + segundosRestante


    //Condicao final
    if(sec>0){
        sec=sec-1;
    }
    else{
        countDiv.innerHTML = "Fish"
    }
};

// execusao a cada segundo
const countDown = setInterval(() => secpass(), 1000);

});