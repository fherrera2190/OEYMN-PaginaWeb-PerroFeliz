$(document).ready(function () { irArriba(); }); //Hacia arriba

function irArriba() {
    $('.ir-arriba').click(function () { $('body,html').animate({ scrollTop: '0px' }, 1000); });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) { $('.ir-arriba').slideDown(600); } else { $('.ir-arriba').slideUp(600); }
    });
    $('.ir-abajo').click(function () { $('body,html').animate({ scrollTop: '1000px' }, 1000); });
}
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

});

$(document).ready(function () {
    imprimirNumeros(document.getElementById('huella1'), 2500);
    imprimirNumeros(document.getElementById('huella2'), 3000);
});

function imprimirNumeros(a, b) {
    const resultado = a; // Obtener el elemento HTML donde se mostrarán los números
    let i = 0; // Inicializar el contador en 0
    function mostrarSiguienteNumero() {
        resultado.innerHTML = i; // Mostrar el número actual en el elemento HTML
        i += 10; // Incrementar el contador

        if (i <= b) {
            setTimeout(mostrarSiguienteNumero, 10); // Esperar 1 segundo y llamar nuevamente a la función para mostrar el siguiente número
        }
    }
    mostrarSiguienteNumero(); // Llamar a la función por primera vez para comenzar a mostrar los números
}


$(document).ready(function () {
    let carousel = document.getElementById("carouselExampleIndicators");
    setInterval(function () {
        // Mueve el carrusel a la siguiente imagen
        let carouselInstance = bootstrap.Carousel.getInstance(carousel);
        carouselInstance.next();
    }, 4000); // Cambia la duración aquí (en milisegundos)
});


