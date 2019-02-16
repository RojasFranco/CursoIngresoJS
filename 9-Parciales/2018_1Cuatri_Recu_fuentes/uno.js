
function mostrar()
{
    var mascotaUno, mascotaDos,pesoMascotaUno,pesoMascotaDos,pesoTotal;
    mascotaUno=prompt("Ingrese el nombre de su mascota");
    mascotaDos=prompt("Ingrese el nombre de su otra mascota");
    pesoMascotaUno=prompt("Ingrese el peso de su primer mascota");
    pesoMascotaDos=prompt("Ingrese el peso de su segunda mascota")
    pesoTotal=parseInt(pesoMascotaUno)+parseInt(pesoMascotaDos);
    alert("Tenes dos mascotas "+mascotaUno+" y "+mascotaDos+", que pesan "+pesoMascotaUno+" y "+pesoMascotaDos+" kilos, y la suma de los kilos es "+pesoTotal);

}