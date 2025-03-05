// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".scheme__item");
    const contents = document.querySelectorAll(".scheme__content");

    if (items.length !== contents.length) {
        console.warn("Количество элементов scheme__item и scheme__content не совпадает!");
        return;
    }

    function updateActiveContent(index) {
        // Убираем активные классы у всех
        items.forEach(i => i.classList.remove("_active"));
        contents.forEach(c => c.classList.remove("_active"));

        // Добавляем активный класс к выбранному элементу
        items[index].classList.add("_active");
        contents[index].classList.add("_active");
    }

    // Найти уже активный элемент и отобразить соответствующий контент
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains("_active"));
    if (activeIndex === -1) activeIndex = 0; // Если активного нет, выбираем первый
    updateActiveContent(activeIndex);

    // Назначаем обработчики клика
    items.forEach((item, index) => {
        item.addEventListener("click", () => updateActiveContent(index));
    });
});


// const elem = document.querySelector('.services'); // выбираем элемент, на котором будем отслеживать движение мыши

// elem.addEventListener('mousemove', function (event) {
//     // добавляем обработчик события "mousemove"
//     const x = event.clientX; // получаем координату X мыши
//     const y = event.clientY; // получаем координату Y мыши

//     const item = elem.querySelector('.services__item');

//     console.log(`Координаты мыши: x=${x}, y=${y}`); // выводим координаты мыши в консоль
//     console.log(`Координаты 2: x=${x / 100}, y=${y / 100}`); // выводим координаты мыши в консоль

//     const centerX = targetNode.offsetLeft + targetNode.offsetWidth / 2;
//     const centerY = targetNode.offsetTop + targetNode.offsetHeight / 2;

//     console.log(`centerX`);
//     console.log(`centerY`);

//     // item.style.cssText = `transform: rotateX(-${y / 100}deg) rotateY(${x / 100}deg);`
// });