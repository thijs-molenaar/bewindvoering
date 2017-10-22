define(['jquery', 'Person'], function ($, Person) {

	"use strict";

	var app = {};
	
	app.getPerson = (id) => {
		
	};
	
	app.insertPerson = (person) => {
		let xxx = new Person("Pietje", "Puk", "1999-12-12");
		let url = "http://localhost:5000/people";
		
		$.post({url: url,
		data: xxx
		}, (data) => {
			console.log(data);
			console.log(data._status);
		});
	};

    return app;
});
