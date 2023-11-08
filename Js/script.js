/* Custom JS */

// nav collapse
const navItems = document.querySelectorAll('.nav-item');
const navMenu = document.querySelector('#navMenu');

navItems.forEach(li => {
    li.addEventListener('click', () => {
        let ww = window.innerWidth;  // gives witdth of window responsive
        console.log(ww);
        // let bsToggle = new bootstrap.Collapse(navMenu);  // remember this to collapse the toggle nab menu
        // bsToggle.toggle();
        // but why inner width because if we dont give <992 we will get collapse after 992 also.
        if(ww < 992){
            let bsToggle = new bootstrap.Collapse(navMenu);  
            bsToggle.toggle();
            //or we can use hide also
            // bsToggle.hide();
        }
    })
})

// owl Carousel

$(document).ready(function(){
    // (slide show)

    $('#slide-show .owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true  // mouse hove effect.
    });

    // Top-Sale Owl-carousel
    $('#top-sale .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });

    // Isotope
    let grid = $('#special-price .grid').isotope({
        //options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    //filter items on button click
    $('#filters').on('click', 'button', function(){
        let filterValue = $(this).attr('data-filter');
        grid.isotope({filter: filterValue});  // the filter will happen
        removeActiveFilter();
        $(this).addClass('active-filter');

    })
})

//remove active-filter class
function removeActiveFilter(){
    const buttons = document.querySelectorAll('#filters button');
    buttons.forEach(btton => {  // here we can take any name like btn
        btton.classList.remove('active-filter');  // here vanila javascript is used we can use jqery also
        // $(buttons).removeClass('active-filter');  // we can use jqery also
    })
}

$(document).ready(function(){
        // New-phones Owl-carousel
        $('#new-phones .owl-carousel').owlCarousel({
            dots: true,
            nav: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });


        // Product :> Qty
        let qtyUp = $('.qty .qty-up');
        let qtyDown = $('.qty .qty-down');
        // let qtyInput = $('.qty .qty-input');

        let limitQty = 10;

        qtyUp.click(function(e){  // e is default event sometimes used for prevent but not needed here.
            // alert('You clicked Plus');
            let parentEl = $(this).parent();
            let qtyInput = parentEl.find('input');
            let qtyVal = parseInt(qtyInput.val());
            if(qtyVal < limitQty){
               let udVal = qtyVal + 1;
                qtyInput.val(udVal);
            }
        })
        qtyDown.click(function(e){  
            // alert('You clicked Minus');
            let parentEl = $(this).parent();
            let qtyInput = parentEl.find('input');
            let qtyVal = parseInt(qtyInput.val());
            if(qtyVal > 1){
                let udVal = qtyVal - 1;
                qtyInput.val(udVal);
            }
        })


})