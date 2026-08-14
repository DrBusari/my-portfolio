function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}

function sayHello() {
    document.getElementById("message").textContent = "Hello! Welcome to my portfolio 👋";
}

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const text = "Hello, I'm Bossman 👋";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typingText").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();
