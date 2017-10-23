define(['jquery', 'Person'], function ($, Person) {

	"use strict";

	var app = {};
	
	app.getPersons = (callback) => {
		let url = "http://localhost:5000/people";
		
		$.get(url, (response) => {
			callback(response);
		});
	};
	
	app.insertTransaction = (transaction) => {
		let url = "http://localhost:5000/transactions";
		
		$.post({url: url,
		data: transaction
		}, (data) => {
			console.log(data);
			console.log(data._status);
		});
	};
	
	app.insertPerson = (person) => {
		let url = "http://localhost:5000/people";
		
		$.post({url: url,
		data: person
		}, (data) => {
			console.log(data);
			console.log(data._status);
		});
	};

    return app;
});
