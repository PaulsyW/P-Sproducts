const nav = document.querySelector('.navbar');
fetch('./includes/navbar.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data;
        const parser = newDOMParser();
        const doc = parser.parserFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    })

let count = 0;
let total = 0;

function addToCart(itemName, itemPrice) {
    count++;
    total += itemPrice;
    document.getElementById('count').textContent = count;
    document.getElementById('total').textContent = '$' + total.toFixed(2);
    document.getElementById('cartitem').textContent = itemName;
}

// Example usage:
addToCart('Example Item', 10.99);
//form//
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('signupModal');
    const openBtn = document.getElementById('openSignupBtn');
    const closeBtn = document.querySelector('.close');

    openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const form = document.getElementById('signupForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        alert('Signup successful');
        modal.style.display = 'none';
    });
});
//form.....