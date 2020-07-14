const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

let cart = [];
let modalQt = 1;
let modal = 0;


pizzaJson.map((item, index) => {
    let pizzaItem = $('.models .pizza-item').cloneNode(true);
    // detalhes da pizza
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.setAttribute('data-key', index);

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{ 
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;
        
        $('.pizzaBig img').src = pizzaJson[key].img; // Conteudo do modal
        $('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        $('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        $('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        $('.pizzaInfo--size.selected').classList.remove('selected');
        $$('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        })

        $('.pizzaInfo--qt').innerHTML = modalQt;

        $('.pizzaWindowArea').style.opacity = 0; // Animação do modal
        $('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            $('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    })

    $('.pizza-area').append(pizzaItem);
});

function closeModal() {
   $('.pizzaWindowArea').style.opacity = 0;
   setTimeout(()=>{
   $('.pizzaWindowArea').style.display = 'none';
   }, 500);
}
