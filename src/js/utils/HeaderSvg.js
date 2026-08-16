fetch("assets/svg/header.svg")
    .then(response => response.text())
    .then(svg => {
        document.querySelector(".SVGBG").innerHTML = svg;
    });