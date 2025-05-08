function validateForm() {
    // Ukryj poprzednie komunikaty o błędach
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Pobierz dane z formularza
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var valid = true;

    // Walidacja imienia
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Imię i nazwisko są wymagane!";
        valid = false;
    }

    // Walidacja emaila
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Adres email jest wymagany!";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Proszę podać prawidłowy adres email!";
        valid = false;
    }

    // Walidacja wiadomości
    if (message.trim() === "") {
        document.getElementById("messageError").innerText = "Wiadomość jest wymagana!";
        valid = false;
    }

    // Zwróć false, aby zapobiec wysłaniu formularza, jeśli są błędy
    return valid;
}