/*
 * Первый урок: Объявление на уровне блока
 * Объявление на уровне блока делается при помощи let и создаёт переменные, 
 * недоступные за пределами блока. Область видимости (block scopes), 
 * которую так же называют лексической областью видимости (lexical scopes),
 * создаються в следующих местах:
 * - внутри функции
 * - внутри блока ограниченного фигурными скобками { ... }
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
		let value = "ok";
		return value
	}

	// Если condition == false, здесь переменная сущестует?
	return value;
}

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

	var result =
		"<h2>Первый урок: Объявление и место положение переменных</h2>" +
		"<ul>" +
		"<li>getValueQ(false) = " + getValueQ(false) + "</li>" +
		"</ul>";

	res.end(result);
}).listen(port);
