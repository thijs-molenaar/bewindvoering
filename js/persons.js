define(['jquery', 'Person'], function ($, Person) {

	"use strict";

	var persons = {};
	
	var createPersonLi = (person) => {
	console.log(person);
		let li = "<li data-id='" + person._id + "'>";
		li += person.firstname;
		li += " ";
		li += person.lastname;
		li += "</li>";
		return li;
	};
	
	persons.fillPersonsArray = () => {
		let url = "http://localhost:5000/people";
		
		$.get(url, (response) => {
			let persons = response._items;
			let $personsUl = $('#persons-ul');
			
			persons.forEach( (person) => {
				let li = createPersonLi(person);
				$personsUl.append(li);
			});
		});
	};

    return persons;
});
