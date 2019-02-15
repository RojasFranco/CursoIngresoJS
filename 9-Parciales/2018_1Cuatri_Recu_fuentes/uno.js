
function mostrar()
{
    var mascotaUno, mascotaDos,pesoMascotaUno,pesoMascotaDos,pesoTotal;
    mascotaUno=document.getElementById("mascotaUno").value;
    mascotaDos=document.getElementById("mascotaDos").value;
    pesoTotal=parseInt(pesoMascotaUno)+parseInt(pesoMascotaDos);
    alert("Tenes dos mascotas "+mascotaUno" y "+mascotaDos+", que pesan "+pesoMascotaUno+" y "+pesoMascotaUno+" kilos,la suma de los kilos es "+pesoTotal);
}
