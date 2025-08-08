let encabezado = `
    <div id="logo">
    <a href="index.html"><img src="./assets/img/LogoConsulmedCuadradoNormal.png" height="120" alt="Logo"></a>
    </div>
    <div class="flex-titulo">
    <div class="span1">
        <span class="texto">Consulmed</span>
    </div>
    <div class="span2">
        <span class="texto">Generamos <b>S O N R I S A S</b> desde hace casi 40 años</span>
    </div>
    </div>
    <div class="flex-nav">
    <nav>
        <ul>
            <li><a href="index.html">Inicio</a>
            </li>
            
            <li> <a href="#">Agenda</a>
                <ul>
                    <li><a href="Guardia24hs.html">Guardia 24hs</a></li>    
                    <li><a href="proximas.html">Próximas</a></li>    
                    <li><a href="ausentes.html">Ausentes</a></li>
                </ul>
            </li>
            <li><a href="cartilla.html">Cartilla</a>
            </li>
            <li> <a href="gestiones.html">Gestiones</a>
            </li>
            <li><a href="contacto.html#contacto">Contacto</a>
            </li>
            <!-- <li><a id="qs" href="index.html#quienes_somos">Quiénes somos</a>
            </li> -->
        </ul>
    </nav>
    </div>
`
document.querySelector("#header").innerHTML = encabezado


/* "Nav original"
    <nav>
        <a href="index.html">Inicio</a>
        <a href="objetivos.html">Objetivos</a>
        <a href="productos.html">Productos</a>
        <a href="contacto.html#contacto">Contacto</a>
        <!-- <a id="qs" href="index.html#quienes_somos">Quiénes somos</a> -->
    </nav>
*/