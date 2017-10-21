define(function(){

	"use strict";

    var Person = function (firstname, lastname, dob) {
     
        if (!(this instanceof Person)) {
            throw new TypeError("Person constructor cannot be called as a function.");
        }

        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;

    };

    return Person;
});
