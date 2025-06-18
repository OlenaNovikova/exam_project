document.getElementById('convertBtn').addEventListener('click', function () {
    const input = document.getElementById('inputCoords').value;
    const systemType = document.getElementById('systemSelect').value;
    const outputCoords = document.getElementById('outputCoords');

    // Перевірка коректності введених даних
    if (!validateInput(input)) {
        outputCoords.textContent = "❌ Некоректне введення! Використовуйте формат: x, y, z";
        return;
    }

    // Виконання перетворення
    const converted = convertCoordinates(input, systemType);
    outputCoords.textContent = converted;

    // Оновлення AR-відображення (перевіряємо, чи існує елемент)
    const coordDisplay = document.getElementById('coordDisplay');
    if (coordDisplay) {
        coordDisplay.setAttribute('text', `value: ${converted}; color: white`);
    } else {
        console.error("Елемент coordDisplay не знайдено!");
    }
});

document.getElementById("convertBtn").addEventListener("click", function() {
    const input = document.getElementById("inputCoords").value;
    const systemType = document.getElementById("systemSelect").value;

    if (!validateInput(input)) {
        document.getElementById("outputCoords").textContent = "❌ Некоректне введення!";
        return;
    }

    const converted = convertCoordinates(input, systemType);
    document.getElementById("outputCoords").textContent = converted;
});

document.getElementById("openDemo").addEventListener("click", function() {
    document.getElementById("demoFrame").src = "demo.html";
    document.getElementById("demoModal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("demoModal").style.display = "none";
});

function validateInput(input) {
    const pattern = /^-?\d+(\.\d+)?,\s*-?\d+(\.\d+)?(,\s*-?\d+(\.\d+)?)?$/;
    return pattern.test(input);
}
