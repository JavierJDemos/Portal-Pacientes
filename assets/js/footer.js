let nav_pie = `
    <nav>
    <a href="index.html">Inicio</a>
    <a href="contacto.html">Contacto</a>
    <a id="qsf" href="quienes.html#quienes_som">¿Quiénes somos?</a>
    <a id="tcf" href="terminos.html">Términos y Condiciones</a>
    </nav>
`

let data = [
    {
        imagen: "./assets/img/MediosPago/visa@2x.png",
        tarjeta: "visa"
    },
    {
        imagen: "./assets/img/MediosPago/mastercard@2x.png",
        tarjeta: "mastercard"
    },
    {

        imagen: "./assets/img/MediosPago/amex@2x.png",
        tarjeta: "amex"
    },
    {
        imagen: "./assets/img/MediosPago/diners@2x.png",
        tarjeta: "diners"
    },
    {
        imagen: "./assets/img/MediosPago/argencard@2x.png",
        tarjeta: "ar_argencard"
    },
    {
        imagen: "./assets/img/MediosPago/mercadopago@2x.png",
        tarjeta: "mercadopago"
    },
    {
        imagen: "./assets/img/MediosPago/CuentaDNI.png",
        tarjeta: "cuentadni"
    },
    {
        imagen: "./assets/img/MediosPago/Transferencia.png",
        tarjeta: "transferencia"
    },
    {
        imagen: "./assets/img/MediosPago/maestro@2x.png",
        tarjeta: "maestro"
    },
    {
        imagen: "./assets/img/MediosPago/visadebit@2x.png",
        tarjeta: "visadebit"
    }]

let texto = `
    <h4>Aceptamos estos medios de pago</h4>
    <br>
    <div>
`
for (let tarj of data) {
    texto += `
    <img src=${tarj.imagen} 
    alt=${tarj.tarjeta} 
    width="48" height="30">
    `
}

let pie = `
    <div>
    <span>Copyright Consulmed Odontología - 2025. Todos los derechos reservados.</span>
    </div>
    <!-- desarrolladores -->
    <div>
    <span>&copy; Consulmed CC - </span>
    <span>Email: <a href="mailto:comunidad@consulmed.com.ar">comunidad@consulmed.com.ar</a></span>
    </div>
    <br>
`

document.querySelector("#nav-footer").innerHTML = nav_pie
document.querySelector("#medios_pago").innerHTML = texto+"</div><br>"
document.querySelector("#pie").innerHTML = pie