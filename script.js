/* ================= DARK MODE ================= */

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }
}


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}
