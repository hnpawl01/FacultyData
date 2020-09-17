console.log("employees", employees)
var getLastname = function (employee)
{
	return employee.lastName;
}
//var lastNames = employees.map(getLastname);
d3.select("body")
	.append("ol")
	.selectAll("li")
//	.data(lastNames)
	.data(employees)
	.enter()
	.append("li")
	.text(getLastname)
//	.text(function(s) {return s;})