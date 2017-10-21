define(), function()
{
	
	var my = {};

	my.addPerson = function (firstname, lastname, dob)
	{
		let person = new Person(firstname, lastname, dob);
		console.log(person);
	}
	
	return my;
}
