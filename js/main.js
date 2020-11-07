/*
	ГЛАВНЫЙ ФАЙЛ ИГРЫ
*/

// запускаем функцию при загрузке страници
function start() {
	
	// создаем стартовый блок
	sozdanieStartBlock();
	//при клике на кнопку "начать" (Play) запускаем игру
	startKnopka.onclick = nachat;
}

//=================================
// при начале игры выполняем эту функцию
function nachat() {
    
    // присваиваем статусу "начало"
	status = "nachat";
    //удаляем стартовый блок
	udalenieStartBlock();
    //создаем Фрукт_Абрикос
	sozdanieAbricos();
	//создаем Фрукт_Яблоко
	sozdanieApple();
    //создаем очки
	sozdanieOchkiBlock();
	//создаем Облако
	sozdanieOblakoBlock();
	//создаем Ворота
	sozdanieVorotaBlock();
	// создаем камни
	sozdanieKamenyBlock();
    // запускается основная музыка игры
	playMusik();
	// создаем блок таймера
	sozdanieTimerBlock();
	// запускаем таймер обратного отсчета 
	timerIgra();
    // функция вывода Бомбы на поле
	pokazatBomba();
}

start();

//=============================
// создаём функцию "конец игры"
function konecIgra() {
    
    // присваиваем статусу "конец"
	status = "koniec";
	// удаляем ворота блок
	udalenieVorotaBlock();
	// удаляем камней блок
	udalenieKamenyBlock();
	// удаляем облако блок
   	udalenieOblakoBlock();
   	// очищаем игровое поле от остальных элементов
	chistkaIgraPole();
    // вызыводим блок "Конец Игры"
	sozdanieKonecIgraBlock();
    // останавливаем музыку фона на паузу
	stopPlayMusik();
    // при клике на кнопку ""Ещё?!"" (snova) запускается функция restart (запускается сново игра)
	snova.onclick = restart;
}

//=============================
// вызываем повторное начало игры (выполняем эту функцию)
function restart() {
	
	// присваиваем статусу "начало"
	status = "nachat";
	// удаляеи блок "Конец Игры"
	udalenieKonecIgraBlock();
	// обнуляем счетчик очков
	ochki = 0;
	// станавливаем таймер на 20 секунд
	timerBlock.innerText = 20;
    //создаем очки
	sozdanieOchkiBlock();
	//создаем Фрукт_Абрикос
	sozdanieAbricos();
	//создаем Фрукт_Яблоко
	sozdanieApple();
	//создаем Облако
	sozdanieOblakoBlock();
	//создаем Ворота
	sozdanieVorotaBlock();
	// создаем камни
	sozdanieKamenyBlock();
    // запускается основная музыка игры
	playMusik();
	// создаем блок таймера
	sozdanieTimerBlock();
	// запускаем таймер обратного отсчета 
	timerIgra();
    // функция вывода Бомбы на поле
	pokazatBomba();
}

//==================================================

// функция для обратного отсчета времени игры
function timerIgra() {
	// в переменную clock помещаем фун-цию обратного отсчета таймера
	clock = setInterval(function () {
		// выводим текст таймера
		timerBlock.innerText = timerBlock.innerText - 1;
        
        // условие: если таймер равен 6 - цвет таймера меняется на красный
        if (timerBlock.innerText == 6) {
           timer.style.color = "red";
           finalCountDown();
		}

		//условие: если таймер равен 0, тогда ->
		if(timerBlock.innerText == 0) {
			// -> останавливается обратный отсчет
			clearInterval(clock);
			// вызывается ф-я окончания игры 
			konecIgra();
		}
	}, 1000); // каждую секунду выполнять то, что прописано в фун-ции
}
	














