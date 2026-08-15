/* ================================
   DARK MODE
================================ */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const themeButton =
        document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");
    }
}


/* ================================
   LOAD SAVED THEME
================================ */

document.addEventListener("DOMContentLoaded", function () {

    const themeButton =
        document.getElementById("themeButton");

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeButton) {
            themeButton.textContent = "☀️ Light Mode";
        }

    } else {

        if (themeButton) {
            themeButton.textContent = "🌙 Dark Mode";
        }
    }

});


/* ================================
   BACK TO TOP
================================ */

function goToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================================
   CONTACT FORM MESSAGE
================================ */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function () {

        const formMessage =
            document.getElementById("formMessage");

        if (formMessage) {

            formMessage.textContent =
                "Sending your message...";

        }

    });

}
