const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    <div class="nav-bar">
            <div class="nav-item">
                <a href="/index.html">Juana's</a>
            </div>
            <div class="nav-item">
                <div class="search">
                    <input type="text" placeholder="Buscar producto..." class="search-input">
                    <a class="search-icon" href="#"><i class="fa-solid fa-magnifying-glass lupa"></i></a>
                </div>
            </div>
            <div class="nav-item">
            <a>
            <i id="user-img" class="fa-solid fa-user user"></i>
            <div class="login-logout-popup hide">
            <p class="account-info">Iniciar sesión como, nombre</p>
            <button class="btn-login-logout" id="user-btn">Cerrar sesión</button>
            </div>
            </a>   
            <a href="/carrito.html"><i class="fa-solid fa-bag-shopping carrito"></i></a>
            </div>
        </div>
            <ul class="items-categorias">
                <li class="categorias"><a href="/html/bolsos.html">Bolsos</a></li>
                <li class="categorias"><a href="/html/mochilas.html">Mochilas</a></li>
                <li class="categorias"><a href="/html/hombre.html">Hombre</a></li>
                <li class="categorias"><a href="/html/accesorios.html">Accesorios</li>
            </ul>
    `
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null) {
        // means user is logged in
        popuptext.innerHTML = `Iniciar sesión como, ${user.name}`;
        actionBtn.innerHTML = 'Cerrar sesión';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    } else {
        // user is logged 
        popuptext.innerHTML = 'Iniciar sesión para realizar el pedido';
        actionBtn.innerHTML = 'Iniciar sesión';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}
