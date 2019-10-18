//---------------------------- SLIDER PRINCIPAL PAGINA INICIO ----------------------------------------

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoWidth: true,
    navText: ['<i class="fa fa-chevron-circle-left" title="Anterior"></i>', '<i class="fa  fa-chevron-circle-right" title="Siguiente"></i>'],
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2,
            margin: 20
        },
        800: {
            items: 3,
            margin: 20
        },
        1000: {
            items: 4,
            margin: 20
        }
    }
})