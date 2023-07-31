let contador = 0;
let Productos = document.getElementsByClassName("nombre")
let nombreDeProductos = []
for (let i in Productos) {
    if (Productos[i].innerHTML !== undefined) {
        nombreDeProductos.push(Productos[i].innerHTML)
    }
}
let Precios = document.getElementsByClassName("precio")

let preciosContables = []

for (let i in Precios) {
    if (Precios[i].innerHTML !== undefined) {
        preciosContables.push(Number(Precios[i].innerHTML.slice(1, -4)))
    }
}

document.getElementsByClassName("formulario")[0].addEventListener('submbit',Ingresar())

function Ingresar(e) {
    e.preventDefault()
    let valor=Number(document.getElementById("entrada").innerHTML)
    let monto = 0;
    monto += valor;
    contador++;
    console.log(monto)
}

if (contador == 3) {
    document.getElementById("entrada").style.display = none
}