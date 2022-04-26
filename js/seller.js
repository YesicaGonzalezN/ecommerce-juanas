let loader = document.querySelector('.loader');

const dashboardForm = document.querySelector('.dashboard-form');
const productList = document.querySelector('.product-list');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-btn');

window.onload = () => {
    if(sessionStorage.user) {
        let user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            if(!user.seller){
                dashboardForm.classList.remove('hide');
            } else {
                productList.classList.remove('hide');
            }         
        } else {
            location.replace('/login');
        }
    } else {
        location.replace('/login');
    }
}


showApplyFormBtn.addEventListener('click', () => {
    dashboardForm.classList.add('hide');
    applyForm.classList.remove('hide');
})

// form submission

const applyFormButton = document.querySelector('#apply-form-btn');
const businessName = document.querySelector('#business-name');
const addres = document.querySelector('#business-add');
const about = document.querySelector('#about');
const number = document.querySelector('#number');

applyFormButton.addEventListener('click', () => {
    if(!businessName.value.length || !addres.value.length || !about.value.length || !number.value.length){
        showAlert('Completa todos los items');
    } else {
        // making server request
        loader.style.display = 'block';
        sendData('/seller', {
            name: businessName.value,
            addres: addres.value,
            about: about.value,
            number: number.value,
            email: JSON.parse(sessionStorage.user).email
        })
    }
})
