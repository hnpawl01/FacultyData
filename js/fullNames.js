var getFirstname = function(employee)
{
	return employee.firstName
}

	var getLastname = function(employee)
{
	return employee.lastName
}
//var lastNames = employees.map(getLastname);
var getname = function(employee){
	return getFirstname(employee) + " " + getLastname(employee)
}

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2")
.text(getname)
