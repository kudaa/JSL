/*
 * Каркас приложения, на котором будем проводить наши эксперименты
 *
 * Все материалы можно скачать из репозитория https://github.com/kudaa/JSL
 *
 */

'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

	var result =
		"<h2>Первый урок: Объявление и место положение переменных</h2>" +
		"Этот фрагмент кода будет использоваться для всех дальнейших примеров🐱‍🏍";

	res.end(result);
}).listen(port);