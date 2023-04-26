/*
    Requisitos?
        + solamente se puede ingrar bitcoins
        - se tiene que permitir poder convertir de ETH a USD
        - devolver en la pagina el resultado de la conversion
            - tiene que mostrar el valor recibido

    info?
        - 1 BTC = 13.54 ETH
        - 1 BTC = 39685.40 USD

    Requisitos nuevos:
        - mejorar la UI con input button
            - reemplazar los prompt y confirm por algun codigo
              que sirva para lo mismo
        - dar una funcionalidad al boton
*/

const CONVERSION_BTC_ETH = 13.54;
const CONVERSION_BTC_USD = 39685.40;

const CONVERSION_VERIFICADA_DEF = false;

const inputBtcRecibidos = document.querySelector("#btc-ingresado");
const inputEthVerificacion = document.querySelector("#eth-verificacion");
const inputUsdVerificacion = document.querySelector("#usd-verificacion");
const pResultadoConversion = document.querySelector("#resultado-conversion");
/* let btcRecibidos = parseFloat(prompt("Ingrese bitcoins a convertir"));
let conversionEthVerificada = confirm("Desea convertir a eth?"); */
let btcRecibidos = "def btc ingresados";
let conversionEthVerificada = "estado verificado por def eth";
let conversionUsdVerificada = CONVERSION_VERIFICADA_DEF;

function convertir(){
    /* console.log( inputNumeroBtc.value );
    console.log( inputEthVerificacion.value);
    console.log( inputUsdVerificacion.value); */
    btcRecibidos = inputBtcRecibidos.value;
    conversionEthVerificada = inputEthVerificacion.value;

    if( conversionEthVerificada == "true" ){
        //document.write("Valor ingresado: "+ btcRecibidos + " bitcoins y valor obtenido en conversion es de: "+ (btcRecibidos * CONVERSION_BTC_ETH) + " ETH" );
        pResultadoConversion.innerHTML =  ("Valor ingresado: "+ btcRecibidos + " bitcoins y valor obtenido en conversion es de: "+ (btcRecibidos * CONVERSION_BTC_ETH) + " ETH" );
    }else{
        //conversionUsdVerificada = confirm("Desea convertir a dolar?");
        conversionUsdVerificada = inputUsdVerificacion.value;
        if(conversionUsdVerificada == "true"){
            //document.write("Valor ingresado: "+ btcRecibidos + " bitcoins y valor obtenido en conversion es de: "+ (btcRecibidos * CONVERSION_BTC_USD) + " USD" );
            pResultadoConversion.innerHTML =  ("Valor ingresado: "+ btcRecibidos + " bitcoins y valor obtenido en conversion es de: "+ (btcRecibidos * CONVERSION_BTC_USD) + " USD" );
        }
    }
}

