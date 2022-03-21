/*
 * Первый урок: Объявление на уровне блока
 * Объявления констант, сравнение const и let
 * 
 * Теория: Значение перменные объявленные при помощи const 
 * нельзя изменять и они должны инициализироваться во время объявления.
 * Область видимости констант ограничивается вмещаюбщим блоком или аналогично оператору let.
 * Повторное объявление var, let и const вызывает синтаксические ошибки.
 *
 * Все материалы можно скачать из репозитория https://github.com/kudaa/JSL
 * 
 */

'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

//function constDeclare() {
//	// ОК: Стандартное объявление константы
//	const age = 18;

//	// ERROR: Константу можно объявлять только присвоив ей значение
//	// SyntaxError: Missing initializer in const declaration
//	const name;
		
//	return age;
//}

//function constChange() {
//	// ОК: Стандартное объявление константы
//	const age = 18;

//	// ERROR: Значние константы нельзя изменять
//	age = 21;

//	return age;
//}

function constInitScope(condition) {

	if (condition) {
		// ОК: Стандартное объявление константы
		const age = 18;

		return age;
	}

	// ERROR: Константа не объявлена	
	return age;
}

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

	var result =
		"<h2>Первый урок: Объявление и место положение переменных</h2>" +
		"<ul>" +
		"<li>constInitScope = " + constInitScope(false) + "</li>" +
		"</ul>";

	res.end(result);
}).listen(port);
