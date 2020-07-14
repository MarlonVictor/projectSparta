$$('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

$('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(modalQt > 1){
        modalQt--;
        $('.pizzaInfo--qt').innerHTML = modalQt;
    }
});
$('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++;
    $('.pizzaInfo--qt').innerHTML = modalQt;
});

$$('.pizzaInfo--size').forEach((size)=>{
    size.addEventListener('click', () => {
        $('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
});

$('.pizzaInfo--addButton').addEventListener('click', () => { //info da pizza ao add no carrinho
    let size = parseInt($('.pizzaInfo--size.selected').getAttribute('data-key'));    
    let identifier = pizzaJson[modalKey].id + '.' + size;
    let key = cart.findIndex((item) => item.identifier == identifier);

    if(key > -1){
        cart[key].qt += modalQt
    } else {
        cart.push({
            identifier,
            id: pizzaJson[modalKey].id,
            size,
            qt: modalQt
        })
    }
    closeModal();
    updateCart();
})

$('.menu--openner').addEventListener('click', () => { //carrinho do mobile
    if(cart.length > 0){
        $('aside').style.left = '0';
    }
})
$('.menu--closer').addEventListener('click', () => {
    $('aside').style.left = '100vh';
})