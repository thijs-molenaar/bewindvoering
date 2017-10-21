define(['jquery', 'Person'], function ($, Person) {

	"use strict";

	var app = {};
	
	app.test = function(){
		let xxx = new Person("Pietje", "Puk", "1999-12-12");
		console.log(xxx);
	};

    return app;
});
