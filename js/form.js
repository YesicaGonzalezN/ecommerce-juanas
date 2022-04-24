const loader = document.querySelector('.loader');

// seleccionar inputs
const submitBtn = document.querySelector('.enviar-btn');
const nameForm = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');

submitBtn.addEventListener('click', () => {
    if (nameForm.value.length < 3) {
        showAlert('Nombre debe tener mas de 3 letras...');
    } else if (!email.value.length){
        showAlert('Ingrese su email');
    } else if (password.value.length < 8){
        showAlert('La contraseña debe tener mas de 8 carácteres');
    } else if (!number.value.length > 6){
        showAlert('Número debe tener mas de 6 carácteres');
    } else {
        // submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name: nameForm.value,
            email: email.value,
            password: password.value,
            number: number.value,
            seller: false
        })
    }
})

// data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
}

// funcion de alerta
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000)
}