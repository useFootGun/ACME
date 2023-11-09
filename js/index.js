const navButtons = document.querySelectorAll(".dropdown-button");
const navBar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");
const menuPath = document.getElementById("menu-path");
const closeIcon = "M17.7,16.3L13.4,12l4.3-4.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,10.6L7.7,6.3c-0.4-0.4-1-0.4-1.4,0 c-0.4,0.4-0.4,1,0,1.4l4.3,4.3l-4.3,4.3c-0.4,0.4-0.4,1,0,1.4c0,0,0,0,0,0c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0l4.3-4.3l4.3,4.3 c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0C18.1,17.3,18.1,16.7,17.7,16.3C17.7,16.3,17.7,16.3,17.7,16.3z";
const burgerIcon = "M21,12L21,12c0,0.6-0.4,1-1,1H4c-0.5,0-1-0.4-1-1V12c0-0.5,0.4-1,1-1H20C20.6,11,21,11.4,21,12z M20,16H4 c-0.5,0-1,0.4-1,1V17c0,0.5,0.4,1,1,1H20c0.5,0,1-0.4,1-1V17C21,16.4,20.6,16,20,16z M20,6H4C3.4,6,3,6.4,3,7V7c0,0.5,0.4,1,1,1H20 c0.5,0,1-0.4,1-1V7C21,6.4,20.6,6,20,6z";
const allDropdown = document.querySelectorAll(".dropdown-container");
const form = document.querySelector('[data-js="form"]');
let activeDropdown = null;

function handleDropdown() {
    for (let i = 0; i < 3; i++) {
        navButtons[i].addEventListener("click", () => {
            const dropdown = navButtons[i].parentNode;
    
            if (activeDropdown && activeDropdown !== dropdown) {
                activeDropdown.classList.remove("active");
            }
    
            dropdown.classList.toggle("active");
            activeDropdown = dropdown;
        });
    }
}

function checkWindowSize() {
    const mediaQuery = window.matchMedia("(min-width: 800px)");

    if(activeDropdown) {
        activeDropdown.classList.remove("active");
    }
    if(!mediaQuery.matches) {
        handleDropdown();
    } else {
        navBar.classList.remove("active");
        menuPath.setAttribute("d", burgerIcon);
    }
}

menuButton.addEventListener("click", () => {
    navBar.classList.toggle("active");

    if(navBar.classList.contains("active")) {
        menuPath.setAttribute("d", closeIcon);
    } else {
        menuPath.setAttribute("d", burgerIcon);
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    if (form.checkValidity()) {
        console.log(formElements);
    }
    event.target.reset();
});

function navigation(slider) {
    const caption = document.querySelector(".slideshow__caption");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    prevButton.addEventListener("click", () => {
      slider.prev();
    });
    nextButton.addEventListener("click", () => {
      slider.next();
    });

    slider.on("slideChanged", () => {
        const slide = slider.track.details.rel + 1;
        caption.textContent=`PICTURE ${slide} OF 5`;
    })    
}

const slider = new KeenSlider("#keen", {
    loop: "true",
}, [navigation]);

window.addEventListener("resize", checkWindowSize);
checkWindowSize();