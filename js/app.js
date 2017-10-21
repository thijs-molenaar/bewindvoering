
define(['account', 'credit', 'debit', 'person'], ), function(account, credit, debit, person)
{
	
	var my = {};

	my.addPerson = function (firstname, lastname, dob)
	{
		let person = new Person(firstname, lastname, dob);
		console.log(person);
	}
	
	return my;
}
