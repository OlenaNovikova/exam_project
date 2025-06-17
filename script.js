function changeBackground() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Сайт успішно завантажено!");
});


