define(function(){

	"use strict";
	
	var Transaction = function (type, name, amount, date, imagePath){
		
		if (!(this instanceof Transaction)) {
            throw new TypeError("Transaction constructor cannot be called as a function.");
        }
		
		this.type = type;
		this.name = name;
		this.amount = amount;
		this.date = date;
		this.imagePath = imagePath;
		
	}; 

	return Transaction;

});