
function mostrar()
{
    var base, altura, superficie, perimetro;
    base=prompt("Ingrese base del triangulo")
    altura=prompt("Ingrese altura del triangulo")
    superficie=parseInt(base)*parseInt(altura)/2
    perimetro=base*3
    alert("La superficie es: "+superficie+" y el perimetro es : "+perimetro)
}
