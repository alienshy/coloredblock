document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("container");
    let divs = container.querySelectorAll("div");
    divs.forEach(function (div, index) {
        if ((index + 1) % 2 === 0) {
            div.classList.add("qirmizi");
        } else {
            div.classList.add("sari");
        }
        if ((index + 1) % 5 === 0) {
            div.classList.remove("qirmizi", "sari");
            div.classList.add("mavi");
        }
    });
});
