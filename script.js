    const passwordBox = document.getElementById("password");
    const lenght = 12; // Length of the password

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allCharacters = upperCase + lowerCase + numbers + symbols;

    function createPassword(){
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while (password.length < lenght) {
            password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
        passwordBox.value = password;
    }

function copyPassword(){
    const password = document.getElementById("password");
    password.select();
    password.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
