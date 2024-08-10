// /* Toggle style switcher */
// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//     document.querySelector(".style-switcher").classList.toggle("open");
// });

// // Hide style switcher on scroll
// window.addEventListener("scroll", () => {
//     if (document.querySelector(".style-switcher").classList.contains("open")) {
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// });

// /* Theme colors */
// const alternateStyles = document.querySelectorAll(".alterate-style");

// function setActiveStyle(color) {
//     alternateStyles.forEach((style) => {
//         if (color === style.getAttribute("title")) {
//             style.removeAttribute("disabled");
//         } else {
//             style.setAttribute("disabled", "true");
//         }
//     });
// }


// /* Theme light */

// // Select the day-night toggle element
// const dayNight = document.querySelector(".day-night");

// // Add click event listener to toggle the theme
// dayNight.addEventListener("click", () => {
//     // Toggle icon classes
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     // Toggle dark mode on the body
//     document.body.classList.toggle("dark");
// });

// // Set initial icon based on the current theme
// window.addEventListener("load", () => {
//     if (document.body.classList.contains("dark")) {
//         dayNight.querySelector("i").classList.add("fa-sun");
//         dayNight.querySelector("i").classList.remove("fa-moon"); // Ensure moon icon is removed
//     } else {
//         dayNight.querySelector("i").classList.add("fa-moon");
//         dayNight.querySelector("i").classList.remove("fa-sun"); // Ensure sun icon is removed
//     }
// });


// ===================================
 // Toggle style switcher
// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//     document.querySelector(".style-switcher").classList.toggle("open");
// });

// // Hide style switcher on scroll
// window.addEventListener("scroll", () => {
//     if (document.querySelector(".style-switcher").classList.contains("open")) {
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// });

// // Theme colors
// const alternateStyles = document.querySelectorAll(".alterate-style");

// // Function to set active style
// function setActiveStyle(color) {
//     alternateStyles.forEach((style) => {
//         if (color === style.getAttribute("title")) {
//             style.removeAttribute("disabled");
//         } else {
//             style.setAttribute("disabled", "true");
//         }
//     });
// }

// // Set default active style on page load
// window.addEventListener("load", () => {
//     setActiveStyle("color-3"); // Default to color-3 which is #37b182

//     // Set initial icon based on the current theme
//     if (document.body.classList.contains("dark")) {
//         dayNight.querySelector("i").classList.add("fa-sun");
//         dayNight.querySelector("i").classList.remove("fa-moon");
//     } else {
//         dayNight.querySelector("i").classList.add("fa-moon");
//         dayNight.querySelector("i").classList.remove("fa-sun");
//     }
// });

// // Theme light

// // Select the day-night toggle element
// const dayNight = document.querySelector(".day-night");

// // Add click event listener to toggle the theme
// dayNight.addEventListener("click", () => {
//     // Toggle icon classes
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     // Toggle dark mode on the body
//     document.body.classList.toggle("dark");
// });


// ================================================================

// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Theme colors
const alternateStyles = document.querySelectorAll(".alterate-style");

// Function to set active style
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Set default active style on page load
window.addEventListener("load", () => {
    setActiveStyle("color-3"); // Default to color-3 which is #37b182

    // Check local storage for dark mode preference
    const darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark");
    }

    // Set initial icon based on the current theme
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun");
    }
});

// Theme light

// Select the day-night toggle element
const dayNight = document.querySelector(".day-night");

// Add click event listener to toggle the theme
dayNight.addEventListener("click", () => {
    // Toggle icon classes
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    // Toggle dark mode on the body
    document.body.classList.toggle("dark");

    // Save the current theme to local storage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});
