let menuButton = document.querySelector("#menu-button");
let closeButton = document.querySelector("#close-button");

let lightBox = document.querySelector(".mobile-nav-lightbox");
let mobileNav = document.querySelector(".mobile-nav");

let toggleButton = document.querySelector(".toggle-button");

menuButton.addEventListener("click", () => {
    lightBox.classList.toggle("hide");
    mobileNav.classList.toggle("hide");
})

closeButton.addEventListener("click", () => {
    lightBox.classList.toggle("hide");
    mobileNav.classList.toggle("hide");
})

function detectColorScheme() {
    let theme = "light";    //default to light
    let getTheme = localStorage.getItem("theme");

    //local storage is used to override OS theme settings
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        theme = "light";
    } else if (getTheme == "dark") {
        theme = "dark";
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
    } else {
        //OS theme setting detected as light
        theme = "light";
    }

    //dark theme preferred, set document with a `data-theme` attribute    
    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}
detectColorScheme();

//pre-check the dark-theme checkbox if dark-theme is set
if (document.documentElement.getAttribute("data-theme") == "dark") {
    setToDarkMode()
} else {
    setToLightMode();
}

//function that tracks the dark theme between page loads with a localStorage variable 
//sets the toggle button
//and sets the dark theme styling
function setToDarkMode() {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleButton.checked = true;
    document.body.classList.add("dark");
}

//function that tracks the light theme between page loads with a localStorage variable 
//sets the toggle button
//and sets the light theme styling
function setToLightMode() {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    toggleButton.checked = false;
    document.body.classList.remove("dark");
}

//function that evaluates theme switching
function switchTheme(e) {
    if (e.target.checked) {
        setToDarkMode();
    } else {
        setToLightMode();
    }
}

//listener for changing themes
toggleButton.addEventListener('change', switchTheme, false);

// detectColorScheme checks if preferred theme is dark
// if it is, it sets the data-theme variable to dark 
// which then causes the site theme to be set to dark theme
// if it isn't, it sets the site theme to light theme
// setToLightMode sets the data-theme variable to light
// subsequent checks then work with either dark or light data-themes