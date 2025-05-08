function changeBackground() {
    var body = document.body;
    if (body.classList.contains("background1")) {
        body.classList.remove("background1");
        body.classList.add("background2");
    } else {
        body.classList.remove("background2");
        body.classList.add("background1");
    }
}

// Przełączanie między trybem jasnym i ciemnym
document.getElementById("toggleModeButton").addEventListener("click", function () {
    var body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
});
