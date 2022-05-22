function verificar(){    

    let escala = document.getElementById("escolhaEscala").value;
    let temp = document.getElementById("temperatura").value;

    esc = " ";
    if(escala == "c" || escala == "C") {
        esc = "Celsius";
    } else {
        esc = "Fahrenheit";
    }

    escalaCerta1.innerHTML = esc;
    escalaCerta2.innerHTML = esc;


    let fahrenheit = ( 9 * temp / 5) + 32 ;
    let celsius = 5 * (temp - 32) / 9 ;

    if(esc == "Celsius") {
        resultado = fahrenheit;
        resposta.innerHTML = resultado.toFixed(2);
    } else {
        resultado = celsius;
        resposta.innerHTML = resultado.toFixed(2);
    }
 
}