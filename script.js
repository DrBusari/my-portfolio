function sayHello() {
    document.getElementById("message").innerHTML =
        "Welcome! Thanks for visiting my website.";
}
function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        button.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");

    window.addEventListener("DOMContentLoaded", function() {
        document.getElementById("themeButton").textContent = "☀️ Light Mode";
    });
}
const text = "Welcome to My Website";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typingText").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();