/*
 * Первый урок: Объявление на уровне блока
 * Повторное объявление не доспустимо
 * 
 * Все материалы можно скачать из репозитория https://github.com/kudaa/JSL
 * 
 */ 
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

function funcError() {
	var age = 18;

	// Повторное объявление вызовет ошибку
	let age = 81;

	return age;
}

function funcOk(condition) {
	var age = 18;

	if (condition) {
		// Создаст новую переменную в блоке if, 
		// закрыв на уровне блока доступ к веременной age объявленной в самой ф - ции
		let age = 81;
		return age;
	}

	return age;
}

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

	var result =
		"<h2>Первый урок: Объявление и место положение переменных</h2>" +
		"<ul>" +
		"<li>funcOk = " + funcOk(true) + "</li>" +
		"</ul>";

	res.end(result);
}).listen(port);
