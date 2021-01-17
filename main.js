const divPrev = document.querySelectorAll('DIV')[0];
const ul = document.querySelector('#albumBar');
const lis = ul.children;
let body = document.querySelector('body');
const clase = ['cl0', 'cl1', 'cl2', 'cl3', 'cl4'];
let lista_produse = document.getElementById('shirts');
let cart_update = 0;
let total = 0;

ul.addEventListener('mouseover', (event) => {
    for (let i = 0; i <= lis.length; i++) {
        if (event.target === lis[i]) {
            divPrev.className = clase[i];
        }
    }

});
ul.addEventListener('mouseout', (event) => {
    for (let i = 0; i <= lis.length; i++) {
        if (event.target === lis[i]) {
            divPrev.className = 'cl6';
        }
    }

});


class Product {
    card_name;
    card_img_src;
    card_text;
    prod_price;


    constructor(name, img, text, nr) {
        this.card_name = name,
            this.card_img_src = img,
            this.card_text = text,
            this.prod_price = nr

    }

}
//Albumele
const prod01 = new Product('Album1', '', '', '20');
const prod02 = new Product('Album2', '', '', '20');
const prod03 = new Product('Album3', '', '', '20');
const prod04 = new Product('Album4', '', '', '20');

//Produsele cu logo etc.
const prod1 = new Product('Tricou Mega Taree!',
    'https://images-na.ssl-images-amazon.com/images/I/71FlheISi0L._AC_UL1500_.jpg',
    'Cel mai tare tricou cu care iti vei impresiona prietenii',
    '12');
const prod2 = new Product('Bluza Cu Mesaj',
    'https://cf.shopee.sg/file/cded496e635ef1889f8f14677120fdd4',
    'Aceasta bluza are un mesaj foarte inspirat!',
    '10');
const prod3 = new Product('Tricou artizanal',
    'https://cdn.shopify.com/s/files/1/0090/2447/1140/products/250580F_450x.jpg?v=1588220870',
    'A fost lucrat manual de membrii formatiei!',
    '8');
const prod4 = new Product('Bandana Festiva',
    'https://i.pinimg.com/originals/66/bd/3d/66bd3d6b118fed6697afc13d57a48768.jpg',
    'Aceasta  bandana te va face sa iesi in evidenta!',
    '5');
const prod5 = new Product('Sapca neagra cu logo!',
    'https://i5.walmartimages.com/asr/579da102-2e91-492f-96e9-d7902a44420c_1.47dce0b19aec093ce0c215959e430806.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    'Fii un fan inflacarat purtand aceasta sapca!',
    '16');
const prod6 = new Product('Sapca de general',
    'https://www.reddickmilitaria.com/images/products/0102-080-1.jpg',
    'A fost purtata in al doilea razboi mondial!',
    '30');
const prod7 = new Product('Cutit de razboi',
    'https://images-na.ssl-images-amazon.com/images/I/91d6YYRDu1L._AC_SX466_.jpg',
    'Nu mai tremura de frica, foloseste acest cutit!',
    '25');
const prod8 = new Product('Bandana Festiva',
    'https://i.pinimg.com/originals/66/bd/3d/66bd3d6b118fed6697afc13d57a48768.jpg',
    'Aceasta  bandana te va face sa iesi in evidenta!',
    '5');

var sirProduse = [];

function creezCard(prod) {
    const card_template = `<div class = "card_prod">
                            <h3>${prod.card_name}</h3>
                           <img src='${prod.card_img_src}' width="400" height="400">
                           <p>${prod.card_text}</p>
                           <span>${prod.prod_price} $ </span>
                           <button id="add_but">Add To Cart</button>
                           </div>`;

    const render_card = document.createElement('div');
    render_card.className = 'card_render';
    render_card.innerHTML = card_template;
    sirProduse.push(render_card);
    body.append(sirProduse[sirProduse.length - 1]);
    const crd = sirProduse[sirProduse.length - 1];
    crd.addEventListener('click', function() {
        crd.remove();

    })
}
//functia ce adauga in cart produsul dorit
function creez_cart_entry(prod) {

    //am setat un id fiecarui produs, id ce corespunde numarului cart-update;
    let id_prod = cart_update;
    //aam setaat butonul DELETE al produsului introdus in cart astfel incat sa contina id-ul de produs
    const cart_entry_template = `<div class = "cart_entry">
                           <span>${prod.card_name}</span>
                           <span>${prod.prod_price} $ </span>
                           <button id="${id_prod}">Delete</button>     
                           </div>`;

    const render_cart_entry = document.createElement('div');
    render_cart_entry.className = `cart_render${id_prod}`; //aam setaat clasa produsului introdus in cart astfel incat sa contina id-ul de produs
    render_cart_entry.innerHTML = cart_entry_template;
    $(".cart_products").append(render_cart_entry);
    //incrementez numarul de produse ce apare in cart colt sus
    cart_update++;
    $(".cart_update").html(cart_update);
    cart_update > 0 ? $(".cart_update").show() : console.log();
    //incrementez totalul
    total += parseInt(prod.prod_price);
    total > 0 ? $('.total').show().html(total) : $('.total').html();

    //functia de eliminare din cart
    $(`#${id_prod}`).click(function() {
        $(`.cart_render${id_prod}`).remove();

        //decrementez numarul de produse ce apare in cart colt sus
        cart_update--;
        $(".cart_update").html(cart_update);
        cart_update < 1 ? $(".cart_update").hide() : console.log();
        //decrementez totalul
        total -= parseInt(prod.prod_price);
        total < 1 ? $('.total').html("* Cartul tau este gol!") : $('.total').html(total);


    });


}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ////////////////////////
    var img = new Image();
    img.src = 'pngs/disk.png';
    ev.dataTransfer.setDragImage(img, 10, 10);
};

//albume
const prod_01 = document.getElementById('album1');
prod_01.addEventListener('click', () => {
    creez_cart_entry(prod01);
});

const prod_02 = document.getElementById('album2');
prod_02.addEventListener('click', () => {
    creez_cart_entry(prod02);
});


const prod_03 = document.getElementById('album3');
prod_03.addEventListener('click', () => {
    creez_cart_entry(prod03);
});

const prod_04 = document.getElementById('album4');
prod_04.addEventListener('click', () => {
    creez_cart_entry(prod04);
});





//produse

const prod_1 = document.getElementById('shirt_1');
prod_1.addEventListener('click', () => {
    creezCard(prod1);
    //fct de adaugare in cart
    $("#add_but").click(() => {
        creez_cart_entry(prod1);

    });
});

const prod_2 = document.getElementById('shirt_2');
prod_2.addEventListener('click', () => {
    creezCard(prod2);
    //fct de adaugare in cart
    $("#add_but").click(() => {
        creez_cart_entry(prod2);
    });
});

const prod_3 = document.getElementById('shirt_3');
prod_3.addEventListener('click', () => {
    creezCard(prod3);
    //fct de adaugare in cart
    $("#add_but").click(() => {
        creez_cart_entry(prod3);
    });
});

const prod_4 = document.getElementById('bandana_1');
prod_4.addEventListener('click', () => {
    creezCard(prod4);
    //fct de adaugare in cart
    $("#add_but").click(() => {
        creez_cart_entry(prod4);
    });
});

const prod_5 = document.getElementById('cap_1');
prod_5.addEventListener('click', () => {
    creezCard(prod5);
    //fct de adaugare in cart
    $("#add_but").click(() => {
        creez_cart_entry(prod5);
    });
});

const prod_6 = document.getElementById('cap_2');
prod_6.addEventListener('click', () => {
    creezCard(prod6);
    //fct de adaugare in cart
    $("#add_but").click(() => {
        creez_cart_entry(prod6);
    });
});

const prod_7 = document.getElementById('knife_1');
prod_7.addEventListener('click', () => {
    creezCard(prod7);
    //fct de adaugare in cart
    $("#add_but").click(() => {
        creez_cart_entry(prod7);
    });
});




//CART DE CUMPARATURI !!!!!!!!!!!!!!!!!!!
//connect drag

function allowDrop(ev) {
    ev.preventDefault();
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).click();
}


//slide
$("#ct_button").click(function() {
    total > 0 ? $("#ct").slideToggle() : $("#ct").hide();
});



//js slide 
// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});


///carousel coding


const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


//aranjeaza slide uri unul langa altul;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//move left/ right;



const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    console.log(targetSlide.style.left);
}
const updateDots = (currentDot, targetDot) => {

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
    updateDots(currentDot, nextDot);
});

dotsNav.addEventListener('click', e => {
    //what indicator was clicked
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    console.log(dotsNav);
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

//reveal social button
const social_section = document.getElementById('socialID');
const social_trigger = document.querySelector('.socialTrigger');
social_trigger.addEventListener('click', (e) => {
    social_section.classList.toggle('is-hidden');
    social_trigger.classList.toggle('socialTrigger__activated');

});