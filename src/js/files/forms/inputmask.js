/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	//flsModules.inputmask = Inputmask().mask(inputMasks);
	//console.log(inputMasks);

	inputMasks.forEach(function (inpMask) {

		if (inpMask.getAttribute("type") == 'tel') {
			console.log(`EST TEL!`);
			Inputmask({
				mask: "+7 (999) 999-99-99",
				showMaskOnHover: false,
				onBeforePaste: function (value) {
					return value.startsWith("8") ? value.slice(1) : value;
				}
			}).mask(inpMask);
		}
	});

}