function mostrar()
{
    var cantAmigos, precio, precioFinal,precioConPropina;
    cantAmigos=prompt("Cuantas personas son?");
    cantAmigos=parseInt(cantAmigos);
    precio=prompt("Cuanto es el precio?");
    precio=parseInt(precio);
    precioFinal=precio*121/100;
    precioConPropina=precioFinal*110/100;
    alert("Cada uno debe pagar "+precioConPropina/cantAmigos+" el precio final es "+precioFinal+" y la propina es "+precioFinal*10/100);
}
