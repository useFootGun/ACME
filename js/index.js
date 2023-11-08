const navButtons = document.querySelectorAll(".dropdown-button");
const navBar = document.querySelector(".navbar");
const burgerButton = document.querySelector(".burger-button");
const allDropdown = document.querySelectorAll(".dropdown-container");
let activeDropdown = null;

// DROPDOWN DROPDOWN DROPDOWN //

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
    }
}

burgerButton.addEventListener("click", () => {
    navBar.classList.toggle("active");
})

// FORM FORM FORM FORM //

const form = document.querySelector('[data-js="form"]');
const dialog = document.getElementById("dialog");
const closeDialogButton = document.getElementById("closeDialog");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    if (form.checkValidity()) {
        console.log(formElements);
    }
    event.target.reset();
});

// function ResizePlugin(slider) {
//     var observer = new ResizeObserver(function () {
//       slider.update();
//     });

//     slider.on("created", () => {
//       observer.observe(slider.container);
//     });
//     slider.on("destroyed", () => {
//       observer.unobserve(slider.container);
//     });
// };

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


// dialog.addEventListener("click", event => {
//     const rect = dialog.getBoundingClientRect();
//     if (event.clientY < rect.top || event.clientY > rect.bottom ||
//         event.clientX < rect.left || event.clientX > rect.right) {
//         dialog.close();
//     }
// });
// closeDialogButton.addEventListener("click", function () {
//     dialog.close();
// });