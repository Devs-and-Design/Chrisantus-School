// Function for navbar links
const clickSingle = (a) => {
    let items = document.querySelectorAll('.single.active');

    if(items.length) 
    {
        items[0].className = 'single';
    }

    a.className = 'single active';
}

// Function for slider links for environment section
const clickEnvSliderNav = (a) => {
    let  slideLinks = document.querySelectorAll('.env-link.green')

    if(slideLinks.length){
        slideLinks[0].className = 'env-link';
    }

    a.className = 'env-link green';
}

// Function for slider links for events section
const clickEventsSliderNav = (a) => {
    let  slideLinks = document.querySelectorAll('.events-link.green')

    if(slideLinks.length){
        slideLinks[0].className = 'events-link';
    }

    a.className = 'events-link green';
}

// Function for slider links for kids section
const clickKidsSliderNav = (a) => {
    let  slideLinks = document.querySelectorAll('.kids-link.green')

    if(slideLinks.length){
        slideLinks[0].className = 'kids-link';
    }

    a.className = 'kids-link green';
}


