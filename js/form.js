// redirect to home page if user logged in
window.onload = () => {
    if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if (compareToken(user.authToken, user.email)) {
            location.replace('/');
        }
    }
}

const loader = document.querySelector('.loader');

// seleccionar inputs
const submitBtn = document.querySelector('.enviar-btn');
const namee = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number') || null;

submitBtn.addEventListener('click', () => {
    if (namee != null) { // sign up page
        if (namee.value.length < 3) {
            showAlert('Nombre debe tener mas de 3 letras...');
        } else if (!email.value.length) {
            showAlert('Ingrese su email');
        } else if (password.value.length < 8) {
            showAlert('La contraseña debe tener mas de 8 carácteres');
        } else if (!number.value.length > 6) {
            showAlert('Número debe tener mas de 6 carácteres');
        } else {
            // submit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: namee.value,
                email: email.value,
                password: password.value,
                number: number.value,
                seller: false
            })
        }
    } else {
        // login page
        if(!email.value.length || !password.value.length){
            showAlert('Completa todas los items')
        } else {
            loader.style.display = 'block';
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})
