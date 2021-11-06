//EJERCICIO CON FOR
// Encuesta anonima de clima de una oficina de 10 personas
 
let climaB= 0; 
let climaR= 0; 
let climaM= 0; 

for ( let i = 0 ; i < 10 ; i++) {

    const numero = prompt ("Calificar clima laboral del 1 al 10"); 

    if ( numero > 7 ){

        climaB++

        console.log ("Buen clima laboraL")
    }
    else if (numero >= 5){

        climaR++

        console.log ("Clima regular" )
    }
    else { 

        climaM++

        console.log ("Mal clima laboral")
    } 

} 

    if ( climaB > climaM && climaB > climaR) {
    console.log ("El clima laboral es bueno, aumente el sueldo ya que esta con " + climaB + " votos"); 
        }
    else if (climaM > climaB && climaM > climaR) {
    console.log ("el clima es malo, media pila, esta con " + climaM + " votos"); 
        }
    else {
    console.log ("clima regular, hay que esforzase, tiene " + climaR + " votos malos"); 
        }


// EJERCICIO CON WHILE

// Encuesta pública a mayores de 16 años para saber el desempeño del presidente de la nación 

/* let votA= 0;

let votB= 0; 

let votC = 0; 

do {
    var nombre = prompt ("Indique su nombre y apellido"); 

    var edad = parseInt (prompt("Indique su edad"));

    var edadM = parseInt(15);

    const voto = prompt("Esta satisfecho con el desempeño del presidente: SI | NO | NO SE")

    if (edad > edadM) {

        if ( voto == "Si" || voto == "SI" || voto == "si"  ){ 
            votA = votA + 1 
            console.log ("Alverso sumo " + votA);
        }
        else if ( voto == "No" || voto == "NO" || voto == "no" ) {
            votB = votB + 1 
            console.log ("El bien sumo " + votB); 
    
        }
        else {
            votC = votC + 1 
            console.log ("En la vida hay que arriesgarse " + votC);
        }

    }

    else {
        console.log (" Menor de edad para votar"); 
        break; 
    }

    

} while ( nombre != "" || edad != "");


if ( votA > votB && votA > votC) {
    console.log ("Estan satisfechos con: " + votA + " votos." ); 
}
else if ( votB > votA && votB > votC) {
    console.log ("La gente no esta satisfecha con la gestión con: " + votB + " votos "); 
}
else {
    console.log ("La gente esta indecisa con: " + votC + "votos");
} */