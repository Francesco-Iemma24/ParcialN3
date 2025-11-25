function invertirValor(){
    event.preventDefault();
    const numero=document.getElementById("problema3").value;
    let inverso="";
    
    if(isNaN(numero)){
        document.getElementById("salida3").textContent="Ingrese un valor numerico";

    }
    for(let i=numero.length-1; i>=0; i--){
        inverso+=numero[i];
    }

    document.getElementById("salida3").textContent=inverso;
}

