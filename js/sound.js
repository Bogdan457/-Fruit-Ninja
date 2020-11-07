/*
	МУЗЫКАЛЬНОЕ СОПРОВОЖДЕНИЕ ИГРЫ
*/

// функция запуска фоновой мелодии игры
function playMusik() {  
var song = document.getElementById('myAudio').play();
}

// функция остановки на паузу фоновой мелодии игры
function stopPlayMusik() {
	var song = document.getElementById('myAudio').pause();
}

// функция присваивания звука свойству "движение мышкой" 
function soundMouseMove() {
	var audio = new Audio();
	audio.src = "musik/22d98ea70c3b3ae.mp3";
	audio.autoplay = true;
}

// функция создания звука взрыва камней
function playBoom() {  
var babah = document.getElementById('myAudio2').play();
}

// функция создания звука обратного отсчёта
function finalCountDown() {  
var second = document.getElementById('myAudio1').play();
}
