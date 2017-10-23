define(function(){

	"use strict";
	
	var Transaction = function (person, title, type, amount, date){
		
		if (!(this instanceof Transaction)) {
            throw new TypeError("Transaction constructor cannot be called as a function.");
        }
		
		this.person = person;
		this.title = title;
		this.type = type;
		this.amount = amount;
		this.date = date;
		
	}; 

	return Transaction;

});