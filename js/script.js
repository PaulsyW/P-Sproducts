const nav = document.querySelector('.navbar');
fetch('./includes/navbar.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data;
        const parser = newDOMParser();
        const doc = parser.parserFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    })