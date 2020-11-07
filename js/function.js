
/*=======================
	ФУНКЦИИ ИГРЫ
=========================*/

/*============================
	Random - случайное число
==============================*/

function random(max) {
	// случайное число от 1 до максимума 
	var rand = 1 + Math.random() * (max + 1);
	// округляем до целого числа
	rand = Math.floor(rand);
	// вывод в консоле случайное число
	console.log(rand);
    // return - вернуть результат
	return rand;
}

/*============================
	вывод Бомбы на поле
==============================*/

function pokazatBomba() {
		// віводим бомбу через 17000 мил.сек с момента запуска функции 
		setTimeout(function() {
			// функция создания бомбы
			sozdanieBomba();
		},17000);
	}

/* =======================================================
==========================================================*/


/*=====================================
	ФУНКЦИИ СОЗДАНИЯ ЭЛЕМЕНТОВ ИГРЫ
=======================================*/

/*=============================
	Создание стартового блока	
===============================*/
/*
<div id="start-block">
	<button id="knopka">PLAY</button>
</div>	
*/
function sozdanieStartBlock() {
	// создаем блок див <div id="start-block"></div>
	startBlock = document.createElement("div");
	startBlock.id = "start-block";
	// создаем кнопку <button id="knopka"></button>
	startKnopka = document.createElement("button");
	startKnopka.id = "knopka";
    // добавляем кнопку в стартовый блок
	startBlock.appendChild(startKnopka);
	// добавляем стартовый блок в игровое поле
	igraPole.appendChild(startBlock);
}	
/* ======================================================= */

/*=====================================
    Cоздание счетчика очков
=======================================*/
/* <div id="stars">0</div> */
function sozdanieOchkiBlock() {
	// создаем блок div
	stars = document.createElement("div");
	// добавляем тегу div => id="stars"
	stars.id = "stars";
	// устанавливаем текст счета игры, текст будет 0                          
	stars.innerText = 0; 
	// добавляем блок очков в игровое поле <div id="igra"></div>
	igraPole.appendChild(stars);
}
/* ======================================================= */

/*=====================================
    Cоздание Таймера
=======================================*/
/* <div id="timer"> 20 </div> */
function sozdanieTimerBlock() {
 	// создаем блок div 
 	timerBlock = document.createElement("div");
 	// прописываем id="timer"
 	timerBlock.id = "timer";
 	// прописываем текст 20
 	timerBlock.innerText = "20";
 	// добавляем в игровое поле таймером
 	igraPole.appendChild(timerBlock);
}
/* ======================================================= */

/*============================
	Создание Облако
==============================*/
/* <div id="oblako"></div> */
function sozdanieOblakoBlock() {
	//создаем блок див div
	oblakoBlock = document.createElement("div");
	// прописываем id="oblako"
	oblakoBlock.id = "oblako";
	// добавляем блок Облако в игровое поле
	igraPole.appendChild(oblakoBlock);
}
/* ======================================================= */

/*===========================
      Создание Ворот
=============================*/
/* <div id="vorota"</div> */
function sozdanieVorotaBlock() {
	//создаем блок див div
	vorotaBlock = document.createElement("div");
	// прописываем id="vorota"
	vorotaBlock.id = "vorota";
	// добавляем блок ворот в игровое поле
	igraPole.appendChild(vorotaBlock);
}
/* ======================================================= */

/*===========================
     Создание Камней
=============================*/
/* <div id="kameny"</div> */
function sozdanieKamenyBlock() {
	//создаем блок див div
	kamenyBlock = document.createElement("div");
	// прописываем id="kameny"
	kamenyBlock.id = "kameny";

	// запустить передвижение kameny вниз
	setTimeout(function() {
		// убираем свойста с задержкой изменения стилей
		kamenyBlock.style.transition = "all 0s";
		// запомним время старта
		let start = Date.now();

		// создаем таймер, который опускает kameny ниже каждые 20 милесекунд
		var timerКameny = setInterval (function() {
			// сколько времени прошло с начала анимации?
			let timePassed = Date.now() - start;
			// в то время как timePassed идёт от 0 до 2000
			// top изменяет значение от 0px до 400px
        	kamenyBlock.style.top = timePassed / 5 + 'px';

        	// закончить анимацию через 2 секунды
        	if (timePassed > 2000) {
        	clearInterval(timerКameny);
        	}
      	}, 20);
    }, 1000);

	// добавляем блок kameny в игровое поле
	igraPole.appendChild(kamenyBlock);
}
/* ======================================================= */

/*============================
	Создание Абрикос
==============================*/
/* <div id="abricos"></div>*/

function sozdanieAbricos() {
	// создаем блок div
	var abricos = document.createElement("div");

	// создание переменной для направления вылета abricos	
	var napravlenie = random(3); // 1 -вылет из центра, 2 - вылет abricos справа, 3 - вылет слева

	// если направление равно 1->
	if(napravlenie ==1) {
		abricos.className = "abricos center"; // -> тогда абрикос вылетает из центра
	// если направление равно 2 ->
	} else if(napravlenie ==2) {
		abricos.className = "abricos right"; // -> в абрикос вылетает справа
	} else {
		abricos.className = "abricos left"; // -> в противном случае абрикос вылетает слева
	}

	//событие "наведение мышки на абрикос"                                       
	abricos.onmousemove = function(){
		// подключаем звук к данному событию
		soundMouseMove();

		// условие: если абрикос из класса не равен свойству "ожидает удаления"
		if(abricos.className != "abricos ojidayet-udaleniya") {
			//увеличиваем счет игры (очков) на +10    
			ochki = ochki + 10;  
			// меняем текст счета игры, текст будет из переменной ochki                        
			stars.innerText = ochki;      

			// условие создания Бомбы: если набрано 60 очков
			if(ochki == 60) {
				sozdanieBomba();
			}            
		
			// стиль abricos прозрачность
			abricos.style.opacity = "0";

			// функция таймера
			setTimeout(function() {
				// удаляем abricos
				abricos.remove();
		
				// создание переменной "существующий abricos"
				var sushestvuetАbricos = document.querySelector(".abricos"); // element | null
				// проверка на существование abricos на поле
				if(sushestvuetАbricos == null) {
					// сколько abricos я хочу сделать (рандомно из 2х)
					var colichestvoАbricos = random(2);
					// текущее количество abricos
					var tekucheeColichestvoАbricos = 0;
						
					while(tekucheeColichestvoАbricos < colichestvoАbricos) {
						// создаем abricos
						sozdanieAbricos();
						// увеличиваем счетчик текущего кол-ва абрикос на +1
						tekucheeColichestvoАbricos = tekucheeColichestvoАbricos + 1;
					} // окончание while
				} // окончание проверки sushestvuetАbricos
			}, 200); // конец таймера
		} // конец проверки если абрикос из класса не равен свойству "ожидает удаления"

		//  класс abricos для ожидания удаления 
		abricos.className = "abricos ojidayet-udaleniya";
	} // конец события onmousemove
	
	// позиция abricos: через 90 милисекунд после создания abricos переместить его в новую позицию
	setTimeout(function() {
		abricos.style.top = random(350) + "px";
		abricos.style.right = random(700) + "px";
	}, 90)

	// запустить передвижение abricos вниз и удалять его если вышел за границу поля
	setTimeout(function() {
		// убираем свойста с задержкой изменения стилей
		abricos.style.transition = "all 0s";

		// создаем таймер, который каждые 10 милисекунд опускает abricos ниже
		var timerAbricos = setInterval (function() {
			// меняем позицию abricos опуская его на 1 пиксель вниз
			abricos.style.top = abricos.offsetTop + 1 + "px";
			// если abricos вышел за пределы поля ->
			if(abricos.offsetTop > 450) {
				//-> удаляем этот abricos 
				abricos.remove();
				// создаем новый abricos
				sozdanieAbricos();
			} // окончание "если abricos вышел за пределы поля"
		}, 10); // окончание таймера
	}, 1000); // окончание запуска передвижения abricos

	// условие: если статус не равен статусу "конец", тогда происходит добавление abricos
	if(status != "koniec") {
		// добавляем элемент abricos в игровое поле <div id="pole"></div>
		igraPole.appendChild(abricos);
	}	
} // окончание создания abricos
/* ======================================================= */

/*============================
	Создание Яблоко
==============================*/
/* <div id="apple"></div> */

function sozdanieApple() {
	// создаем блок div
	var apple = document.createElement("div");

	// создание переменной для направления для apple	
	var napravlenie = random(3); // 1 -вылет слева, 2 - вылет apple из центра, 3 - вылет справа
	// если направление равно 1->
	if(napravlenie ==1) {
		apple.className = "apple left"; // -> тогда apple вылетает слева
	// если направление равно 2->	
	} else if(napravlenie ==2) {
		apple.className = "apple center"; // -> тогда apple вылетает из центра
	} else {
	 	apple.className = "apple right"; // -> в противном случае apple вылетает справа
	}

	//событие "наведение мышки на apple"                                       
	apple.onmousemove = function(){
		// подключаем звук к данному событию
        soundMouseMove();

		// условие: если apple из класса не равен свойству "ожидает удаления"
		if(apple.className != "apple ojidayet-udaleniya") {
		 	//уменьшаем счет игры (очков) на -50  
		 	ochki = ochki - 50;  
		 	// меняем текст счета игры, текст будет из переменной ochki                        
		 	stars.innerText = ochki; 

		 	// условие создания Бомбы: если набрано 60 очков
			if(ochki == 60) {
				sozdanieBomba();
			}                
	
		 	// стиль apple прозрачность
		 	apple.style.opacity = "0";

		 	// функция таймера
			setTimeout(function() {
		 		// удаляем apple
		 		apple.remove();
		 		// создание переменной "существующий apple""
		 		var sushestvuetApple = document.querySelector(".apple"); // element | null
		 		// проверка на существование количества apple на поле меньше 5 
		 		if(sushestvuetApple < 5) {
		 			// сколько apple я хочу сделать (рандомно из 5ти)
		 			var colichestvoApple = random(5);
		 			// текущее количество apple присваиваем ноль
		 			var tekucheeColichestvoApple = 0;
					
		 			while(tekucheeColichestvoApple < colichestvoApple) {
		 				// создаем apple
		 				sozdanieApple();
		 				tekucheeColichestvoApple = tekucheeColichestvoApple + 1;
		 			} // окончание while
		 		} // окончание проверки sushestvuetApple на поле меньше 5
		 	}, 200); // конец таймера
		 } // конец проверки если apple из класса не равен свойству "ожидает удаления"

		//  класс apple для ожидания удаления 
		apple.className = "apple ojidayet-udaleniya";
	} // конец события onmousemove
	
	// позиция apple: через 90 милисекунд после создания apple переместить его в новую позицию
	setTimeout(function() {
		apple.style.top = random(350) + "px";
		apple.style.left = random(900) + "px";
	}, 90)

	// запустить передвижение apple вниз и удалять его если вышел за границу поля
	setTimeout(function() {
		// убираем свойста с задержкой изменения стилей
		apple.style.transition = "all 0s";
		
		// создаем таймер, который каждые 10 милисекунд опускает apple ниже
		var timerApple = setInterval (function() {
			// меняем позицию apple опуская его на 3 пиксель вниз
			apple.style.top = apple.offsetTop + 3 + "px";
			// если apple вышел за пределы поля ->
			if(apple.offsetTop > 450) {
				//-> удаляем этот apple 
				apple.remove();
				// создаем новый apple
				sozdanieApple();
			} // окончание "если apple вышел за пределы поля"
		}, 10); // окончание таймера
	}, 1000); // окончание запуска передвижения apple

	// условие: если статус не равен статусу "конец", тогда происходит добавление apple
	if(status != "koniec") {
		// добавляем элемент apple в игровое поле <div id="pole"></div>
		igraPole.appendChild(apple);
	}	
} // окончание создания apple
/*=========================================================================*/

/*============================
	Создание Бомбы
==============================*/
/* <div id="bomba"></div> */

function sozdanieBomba() {
	// создаем блок div
	var bomba = document.createElement("div");

	// создание переменной для направления для bomba	
	var napravlenie = random(3); // 1 -вылет из центра, 2 - вылет bomba справа, 3 - вылет слева
	// если направление равно 1->
	if(napravlenie ==1) {
		bomba.className = "bomba center"; // -> тогда bomba вылетает из центра
	// если направление равно 2->
	} else if(napravlenie ==2) {
		bomba.className = "bomba right"; // -> тогда bomba вылетает справа
	} else {
		bomba.className = "bomba left"; // -> в противном случае bomba вылетает справа
	}

	//событие "наведение мышки на bomba"                                       
	bomba.onmousemove = function(){

		// стиль bomba прозрачность
		bomba.style.opacity = "0";
		// удаляем bomba
		bomba.remove();
 		// останавливается обратный отсчет
 		clearInterval(clock);
		// присваиваем статусу "конец"
 		status = "koniec";
        // создаём эффект взрыва
        sozdanieBoom();

		// функция таймера: вызывается заставка "Блок Взрыв (с тортиком)" через 1400 милисекунды 
        setTimeout(function() {
 			sozdanieVictoryBlock();
        }, 1400);

		// функция таймера: Заставка "Конец Игры" показывается через 4500 милисекунды 
		setTimeout(function() {
			// вызывается ф-я окончания игры 
			konecIgra();
		}, 4500); // окончание таймера
	} // конец события onmousemove
	
	// позиция bomba: через 90 милисекунд после создания bomba переместить ее в новую позицию
	setTimeout(function() {
		bomba.style.top = random(350) + "px";
		bomba.style.right = random(700) + "px";
	}, 90)

	// запустить передвижение bomba вниз и удалять ее если вышла за границу поля
	setTimeout(function() {
		// убираем свойста с задержкой изменения стилей
		bomba.style.transition = "all 0s";
		// создаем таймер, который каждые 10 милисекунд опускает bomba ниже
		var timerBomba = setInterval (function() {
			// меняем позицию bomba опуская ее на 2 пикселя вниз
			bomba.style.top = bomba.offsetTop + 2 + "px";
			// если bomba вышла за пределы поля ->
			if(bomba.offsetTop > 450) {
				//-> удаляем эту bomba 
				bomba.remove();
			} // окончание "если bomba вышла за пределы поля"
		}, 10); // окончание таймера
	}, 1000); // окончание запуска передвижения bomba

	// условие: если статус не равен статусу "конец", тогда происходит добавление bomba
	if(status != "koniec") {
		// добавляем элемент bomba в игровое поле <div id="pole"></div>
		igraPole.appendChild(bomba);
	}	
} // окончание создания bomba
/*=======================================================*/

/*=============================================
	Создание БУМ (эффект взрыва с картинкой взрыва камней)
================================================*/
/* <div id="boom"></div> */
function sozdanieBoom() {
	// создаем блок div
	var boom = document.createElement("div");
	// присваиваем id="boom" 
	boom.id = "boom";
	// добавляем в игровое поле boom
	igraPole.appendChild(boom);
	// музыкальное сопровождение "звук взрыва"
    playBoom();
}
/*=======================================================*/

/*============================
	Создание Блока Победы
==============================*/
/* <div id="vzryv"></div> */
function sozdanieVictoryBlock() {
	//создаем блок див <div id="vzryv"></div>
	victoryBlock = document.createElement("div");
	victoryBlock.id = "victory";

	// создаём картинку 1 счастливый лизун
    var happy = document.createElement("picture");
    happy.id = "happy";
    // добавляем картинку1 в блок победа
    victoryBlock.appendChild(happy);

    // создаём картинку 2 тортик и тексты к картинкам
    var cake = document.createElement("button");
    cake.id = "cake";
    // добавляем картинку 2 в блок победа
   victoryBlock.appendChild(cake);

	var h2 = document.createElement("h2");
    h2.innerText = "Ура! Победа!";
    // добавляем текст в блок победа
    victoryBlock.appendChild(h2);

	var h4 = document.createElement("h4");
    h4.innerText = "Это всё мне?!";
    // добавляем текст в блок победа
    victoryBlock.appendChild(h4); 

    // добавляем блок победа в игровое поле
    igraPole.appendChild(victoryBlock);
}
/*=======================================================*/

/*===========================
      Создание Конец Игры
=============================*/
/* 
<div id="konec"> 
    <h3>Вы набрали: 100 очков </h3>
        <button id="snova"> Еще? </button>
</div>  
*/
function sozdanieKonecIgraBlock() {
    // создаём блок <div id="konec"></div>
    konecBlock = document.createElement("div");
    konecBlock.id = "konec";

    // создаём блок с текстом
    var h3 = document.createElement("h3");
    h3.innerText = "Вы набрали: " + ochki + " очков";
    
    // создаём блок snova  с кнопкой "Ещё?!"
    snova = document.createElement("button");
    snova.id = "snova";
    snova.innerText = "Ещё?!";
    
    // создаем картинку лизуна
    var logo = document.createElement("picture");
    logo.id = "logo";

	// добавляем заголовок в блок конца игры
    konecBlock.appendChild(h3);    
    // добавляем текст результата игры и кнопку играть снова в блок конца игры
    konecBlock.appendChild(snova);  
    // добавляем картинку лизуна в блок конца игры
    konecBlock.appendChild(logo);
	// добавляем блок конца игры в игровое поле
    igraPole.appendChild(konecBlock);	
}
/*=======================================================*/

/* =======================================================
==========================================================*/

/*=====================================
	ФУНКЦИИ УДАЛЕНИЯ ЭЛЕМЕНТОВ ИГРЫ
=======================================*/

// Удаление стартового блока
function udalenieStartBlock() {
	startBlock.remove();
}
/*=======================================================*/
// Удаление ворот блок
function udalenieVorotaBlock() {
	vorotaBlock.remove();
}
// Удаление камней блок
function udalenieKamenyBlock() {
	kamenyBlock.remove();
}
// Удаление облако блок
function udalenieOblakoBlock() {
	oblakoBlock.remove();
}
// очищение игрового поля
function chistkaIgraPole() {
	igraPole.innerText = "";
}
// удаление конца игры блок
function udalenieKonecIgraBlock() {
	konecBlock.remove();
}