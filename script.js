/* ================= DARK MODE ================= */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {

        button.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        button.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }
}


/* ================= REMEMBER THEME ================= */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    window.addEventListener("DOMContentLoaded", function () {

        const button = document.getElementById("themeButton");

        if (button) {
            button.textContent = "☀️";
        }

    });
}


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}
