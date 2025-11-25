function invertirValor() {
    event.preventDefault();
    const numero = document.getElementById("problema3").value;
    let inverso = "";

    if (isNaN(numero)) {
        document.getElementById("salida3").textContent = "Ingrese un valor numerico";

    }
    for (let i = numero.length - 1; i >= 0; i--) {
        inverso += numero[i];
    }

   

    mostrarAlertas('success',inverso);
}


function calcularNota() {
    event.preventDefault();
    const p1 = Number(document.getElementById("nota1").value);
    const p2 = Number(document.getElementById("nota2").value);
    const p3 = Number(document.getElementById("nota3").value);

    let promedio = (p1 + p2 + p3) / 3;
    let notaParciales = promedio * 0.60;

    let A = 91, B = 81, C = 71, D = 61;
    let salida = "";

    function calcular(min, letra) {
        let necesaria = (min - notaParciales) / 0.40;

        if (necesaria <= 0) return `Ya tienes suficiente para sacar ${letra}\n`;
        if (necesaria > 100) return `Imposible sacar ${letra}\n`;
        return `Necesitas ${necesaria.toFixed(2)} para sacar ${letra}\n`;
    }

    salida += calcular(A, "A");
    salida += calcular(B, "B");
    salida += calcular(C, "C");
    salida += calcular(D, "D");

    

    mostrarAlertas('success',salida);
}



 function mostrarAlertas(tipo,texto){
        const mensaje = document.getElementById("mensaje");
        mensaje.className = `alert alert-${tipo}`;
        mensaje.textContent = texto;
    }

