// ! import index.html

fetch('public/index.html')
.then(response => response.text())
.then(data => {
    document.getElementById('index-link').innerHTML = data;
});

fetch("components/footer.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("footer").innerHTML = html;
    })






