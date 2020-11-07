/*
   ПЕРЕМЕННЫЕ ИГРЫ:
*/

//создаем переменную stars - очки на игровом поле
var stars = null;
// создание переменной Облако
var oblako = null;
// создание переменной ворот
var vorota = null;
//создание переменной камни
var kameny = null;

// создаем переменную igraPole для игрового поля
var igraPole = document.querySelector("#pole");

// startBlock - поле-заставка перед началом игры
var startBlock = null;
// startKnopka - кнопка "Play" на игровом поле
var startKnopka = null;
//ochki - переменная счетчика очков, сперва значение счетчика - ноль
var ochki = 0;
// создание переменной статус (для задания условия не выбрасывать фрукты и бомбы после окончания игры)
var status = "open";
// создаем переменную clock для фун-ции обратного отсчета
var clock = null;
// создаем переменную timerBlock и помещаем в нее timer
var timerBlock = null;

//создание блока конца игры
var konecBlock = null;
//создание переменной для кнопки "Ще?"
var snova = null;
// создание переменной для заставки с тортиком (после съеденной бомбы и взрыва камней)
var victoryBlock = null;