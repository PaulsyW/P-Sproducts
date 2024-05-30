const nav = document.querySelector('.navbar');
fetch('./includes/navbar.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data;
        const parser = newDOMParser();
        const doc = parser.parserFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    });
document.querySelector('.signup-form').addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        e.preventDefault();
    }

    if (!phonePattern.test(phone)) {
        alert('Phone number must be in the format 123-456-7890');
        e.preventDefault();
    }
});
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var loginButton = document.getElementById("loginButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
loginButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}