let menuButton = document.querySelector("#menu-button");
let closeButton = document.querySelector("#close-button");
let lightBox = document.querySelector(".mobile-nav-lightbox");
let mobileNav = document.querySelector(".mobile-nav");
let toggleSwitch = document.querySelector(".toggle-button");

menuButton.addEventListener("click", () => {
    lightBox.classList.toggle("hide");
    mobileNav.classList.toggle("hide");
})

closeButton.addEventListener("click", () => {
    lightBox.classList.toggle("hide");
    mobileNav.classList.toggle("hide");
})

toggleSwitch.addEventListener("click", () => {
    if (toggleSwitch.checked) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
})

function detectColorScheme() {
    var theme = "light";    //default to light

    let getTheme = localStorage.getItem("theme");
    //local storage is used to override OS theme settings
    
        if (getTheme == "dark") {
            var theme = "dark";
        
    } else if (!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        var theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}
detectColorScheme();

//identify the toggle switch HTML element

//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
    if (e.target.checked) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }
}

//listener for changing themes
toggleSwitch.addEventListener('change', switchTheme, false);

//pre-check the dark-theme checkbox if dark-theme is set
if (document.documentElement.getAttribute("data-theme") == "dark") {
    toggleSwitch.checked = true;
}

if (toggleSwitch.checked) {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}