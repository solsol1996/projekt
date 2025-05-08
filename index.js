document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleMode");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
    });
});
