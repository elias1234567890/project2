'use strict';

// CV-pagina: Splide toont meerdere skill-logo’s tegelijk.
// Bootstrap regelt het uitklapmenu op kleine schermen.
const skillsCarousel = document.querySelector('#skills-carousel');
if (skillsCarousel && typeof Splide !== 'undefined') {
    new Splide(skillsCarousel, {
        type: 'slide',
        perPage: 4,
        perMove: 1,
        gap: '16px',
        pagination: false,
        autoplay: false,
        rewind: true,
        // Op kleinere schermen blijven drie logo’s zichtbaar.
        breakpoints: {
            991: {
                perPage: 3
            },
            575: {
                perPage: 3,
                gap: '7px'
            }
        },
        // Nederlandse teksten voor de knoppen en schermlezers.
        i18n: {
            prev: 'Vorige skills',
            next: 'Volgende skills',
            first: 'Ga naar de eerste skill',
            last: 'Ga naar de laatste skill',
            slideLabel: '%s van %s',
            carousel: 'carrousel',
            slide: 'skill'
        }
    }).mount();
}

// Hobby-pagina: de bezoeker kiest zelf de volgende of vorige afbeelding.
const hobbyCarousel = document.querySelector('#hobby-carousel');
if (hobbyCarousel && typeof bootstrap !== 'undefined') {
    new bootstrap.Carousel(hobbyCarousel, {
        interval: false
    });
}
