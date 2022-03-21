/*
 * Первый урок: Объявление и местоположение переменных
 * Эффект "поднятия переменной"
 * 
 * Теория: Объявление переменной при помощи var интерпретируется, 
 * как если бы она находилась в начале фунции (или глобальной области 
 * видимости, если объявление находиться за пределами функции), не зависимо 
 * от того, где фактически находится объявление; этот эффект называется
 * "поднятия переменной".
 *
 * Все материалы можно скачать из репозитория https://github.com/kudaa/JSL
 *
 */

'use strict';
var http = require('http');
var port = process.env.PORT || 1337;


//
// Вопрос: что будет с переменной value, если condition = false?
//
function getValueQ(condition) {
	if (condition) {
		var value = "ok";
		return value;
	}

	return value;
}
//
// Ответ: в Javacript происходит подняите переменной
//
function getValueA(condition) {
	var value; // переменная равна undefined

	if (condition) {
		value = "ok";
		return value;
	}

	return value;
}

//
// А вот тут будет ошибка
//
function getValueError() {
	return value;
}

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

	var result =
		"<h2>Первый урок: Объявление и местоположение переменных</h2>" +
		"<ul>" +
		"<li>getValueError() = " + getValueError() + "</li>" +
		"</ul>";

	res.end(result);
}).listen(port);
