// toggle botones color
const colorBtn = document.querySelectorAll('.color-radio-btn');
let checkedBtn = 0;

colorBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        colorBtn[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})

let productId = null;
if(location.pathname != '/sproducto'){
    productId = decodeURI(location.pathname.split('/').pop());
    console.log(productId);
}