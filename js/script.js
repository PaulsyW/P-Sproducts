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
document.addEventListener("DOMContentLoaded", function() {
    const backgroundContainer = document.getElementById('backgroundContainer');
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];
    let currentIndex = 0;

    function changeBackgroundImage() {
        backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initial background image
    changeBackgroundImage();

    // Change background image every 5 seconds
    setInterval(changeBackgroundImage, 5000);
});
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const visibleSlides = 3; // Number of visible slides at a time
    const maxIndex = totalSlides - visibleSlides;

    if (index > maxIndex) {
        currentIndex = maxIndex;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
}

function next() {
    showSlide(currentIndex + 1);
}

function prev() {
    showSlide(currentIndex - 1);
}

function buyProduct(product, price) {
    const mpesaNumber = prompt('Enter your Mpesa number:');
    if (mpesaNumber) {
        const referenceNumber = prompt('Enter the reference number:');
        if (referenceNumber) {
            alert(`You have successfully purchased ${product} for $${price}.`);
        } else {
            alert('Purchase cancelled: Reference number is required.');
        }
    } else {
        alert('Purchase cancelled: Mpesa number is required.');
    }
}

// Initialize carousel
showSlide(currentIndex);

// function searchProducts() {
//     const input = document.getElementById('searchInput').value.toLowerCase();
//     const products = document.querySelectorAll('.product-item');

//     products.forEach(product => {
//         const title = product.querySelector('.product-title').textContent.toLowerCase();
//         const description = product.querySelector('.product-description').textContent.toLowerCase();

//         if (title.includes(input) || description.includes(input)) {
//             product.style.display = 'block';
//         } else {
//             product.style.display = 'none';
//         }

//     })
// }  function searchProducts() {
const input = document.getElementById('searchInput').value.toLowerCase();
const products = document.querySelectorAll('.product-item');
let found = false;

products.forEach(product => {
    const title = product.querySelector('.product-title').textContent.toLowerCase();
    const description = product.querySelector('.product-description').textContent.toLowerCase();

    if (title.includes(input) || description.includes(input)) {
        product.style.display = 'block';
        if (!found) {
            found = true;
            product.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        product.style.display = 'none';
    }
});

if (!found) {
    alert('No products found.');
};