


function calcularEquivalencia(){
    event.preventDefault();
    let valor = parseInt(document.getElementById("valor").value);
    let resultado = "";
    if(isNaN(valor) || valor < 1 || valor > 365){
        mostrarAlertas("danger","Por favor ingrese un número válido entre 1 y 365.");
        return;
    }

    const mesesDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let meses = 0;
    let dia = 0;

    for(let i = 0; i < mesesDias.length; i++){
        if(valor <= mesesDias[i]){
            dia = valor;
            meses = i;
            break;
        } else {
            valor -= mesesDias[i];
        }
}

  resultado = `El día ${parseInt(document.getElementById("valor").value)} corresponde al ${dia} de ${nombresMeses[meses]}.`;
    mostrarAlertas("success",resultado);
}








 function mostrarAlertas(tipo,texto){
        const mensaje = document.getElementById("mensaje");
        mensaje.className = `alert alert-${tipo}`;
        mensaje.textContent = texto;
    }