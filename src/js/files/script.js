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
