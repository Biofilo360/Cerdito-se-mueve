var colorcito = "black"
var grosor = 1;

function watchColorPicker(event) {

    colorcito = event.target.value;
}

function cambioGrosor(valor) {

    grosorNuevo = valor;
    grosor = grosorNuevo;
}

document.addEventListener("change", watchColorPicker, false);
document.addEventListener("mousemove", dibujarTeclado);
document.addEventListener("mousedown", dibujarTeclado2);
document.addEventListener("mouseup", dibujarTeclado3);

var d = document.getElementById('dibujito');
var nuevoColor = document.getElementById('botonColor');

colorcito = nuevoColor;
var lienzoo = d.getContext("2d");
var i = 0;
var x = 200;
var y = 200;

var xx = 0;
var yy = 0;
var pulsado = 0;

dibujarBorde(colorcito, 0, 0, lienzoo.canvas.width, 0, lienzoo);
dibujarBorde(colorcito, 0, 0, 0, lienzoo.canvas.height, lienzoo);
dibujarBorde(colorcito, lienzoo.canvas.width, lienzoo.canvas.height, lienzoo.canvas.width, 0, lienzoo);
dibujarBorde(colorcito, lienzoo.canvas.width, lienzoo.canvas.height, 0, lienzoo.canvas.height, lienzoo);

function borrar() {
    var colorcito = "black"
    lienzoo.clearRect(0, 0, lienzoo.canvas.width, lienzoo.canvas.height);
    dibujarLinea(colorcito, 0, 0, lienzoo.canvas.width, 0, lienzoo);
    dibujarLinea(colorcito, 0, 0, 0, lienzoo.canvas.height, lienzoo);
    dibujarLinea(colorcito, lienzoo.canvas.width, lienzoo.canvas.height, lienzoo.canvas.width, 0, lienzoo);
    dibujarLinea(colorcito, lienzoo.canvas.width, lienzoo.canvas.height, 0, lienzoo.canvas.height, lienzoo);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.lineCap = 'round';
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarBorde(color, xinicial, yinicial, xfinal, yfinal, lienzo) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}








function dibujarTeclado2(evento) {
    pulsado = 1;
    y = evento.layerY;
    x = evento.layerX;
}

function dibujarTeclado3(evento) {
    pulsado = 0;
    y = evento.layerY;
    x = evento.layerX;
}

function dibujarTeclado(evento) {

    if (pulsado == 1) {

        dibujarLinea(colorcito, x, y, evento.layerX, evento.layerY, lienzoo);
        y = evento.layerY;
        x = evento.layerX;
    }


}