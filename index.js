let menuButton = document.querySelector("#menu-button");
let closeButton = document.querySelector("#close-button");

let lightBox = document.querySelector(".mobile-nav-lightbox");
let mobileNav = document.querySelector(".mobile-nav");
let mobileNavMenu = document.querySelector(".mobile-nav a");

let toggleButtons = document.querySelectorAll(".toggle-button");

menuButton.addEventListener("click", () => {
    lightBox.classList.toggle("hide");
    mobileNav.classList.toggle("hide");    
})

closeButton.addEventListener("click", () => {
    lightBox.classList.toggle("hide");
    mobileNav.classList.toggle("hide");
})

document.addEventListener("click", (e) => {
    if(e.target !== menuButton && e.target !== mobileNav  && e.target !== toggleButtons[1]) {
        lightBox.classList.add("hide");
        mobileNav.classList.add("hide");
    }
})

document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname;
    let homePages = document.querySelectorAll(".home-page");
    let worksPages = document.querySelectorAll(".works-page");
    let contactPages = document.querySelectorAll(".contact-page");
    
    if (path.includes("index.html") || path.endsWith("/writer-portfolio/")) {
        for(let homePage of homePages) {
            homePage.classList.add("active");        
        }
    } else if (path.includes('/works/works.html')) {
        for(let worksPage of worksPages) {
            worksPage.classList.add("active");        
        }              
    } else if (path.includes('/works/fashion.html')) {
        for(let worksPage of worksPages) {
            worksPage.classList.add("active");        
        }        
    } else if (path.includes('/contact.html')) {
        for(let contactPage of contactPages) {
            contactPage.classList.add("active");        
        }        
    } else {
        for(let homePage of homePages) {
            homePage.classList.add("active");        
        }
    }
});

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

// const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('dark');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
    // 3. Update toggler position
    for(let toggleButton of toggleButtons) {
        toggleButton.checked = true;
    }    
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('dark');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
    // 3. Update toggler position
    for(let toggleButton of toggleButtons) {
        toggleButton.checked = false;
    }    
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// When someone clicks the button
for(let toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', () => {
        // get their darkMode setting
        darkMode = localStorage.getItem('darkMode');
    
        // if it's not currently enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
            // if it has been enabled, turn it off  
        } else {
            disableDarkMode();
        }
    });    
}
