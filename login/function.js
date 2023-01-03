
const username = document.getElementById("user");
const password = document.getElementById("pass");
const form = document.getElementById('form');



document.addEventListener('submit', function (event) {
    event.preventDefault();
    const lowerCaseUsername = username.value.toLowerCase();
    const lowerCasePassword = password.value.toLowerCase();

    if (lowerCaseUsername === '' || lowerCasePassword === '') {
        alert("There's an empty field. Please try again");
        return;
    }

    if (lowerCaseUsername !== 'admin@gmail.com' || lowerCasePassword !== 'carissa') {
        alert("Wrong Credential");
        return;
    }

    window.location = '../Bluespink Skincare Products/index.html';
})

