const createFooter = () => {
    let footer = document.querySelector('.section-footer');

    footer.innerHTML = `
    <div class="info">
            <h3 class="logo-footer">Juana's Bags</h3>
            <h4>Contacto</h4>
            <p><strong>Teléfono: </strong>+54 11 2157-2623</p>
            <p><strong>Horario: </strong>10:00 a 18:00, Lunes a Viernes</p>
        </div>

        <div class="info">
            <h4>Sobre nosotros</h4>
            <a href="qya.html">Preguntas frecuentes</a>
            <a href="contacto.html">Contáctanos</a>
        </div>
        <div class="info">
            <h4>Mi cuenta</h4>
            <a href="/login.html">Ingresar</a>
            <a href="#">Ver carrito</a>
            <a href="#">Seguir mi orden</a>
        </div>
        <div class="redes">
            <h4>¡Seguinos!</h4>
            <div class="icon-redes">
                <a href="https://www.intagram.com/juanasbagsoficial/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://m.facebook.com/juanasbagsoficial"><i class="fa-brands fa-facebook"></i></a>
            </div>
        </div>
    ` 
}

createFooter();