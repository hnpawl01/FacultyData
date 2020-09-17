console.log("employees", employees);
var getFirstname = function(employee)
{
	return employee.firstName
}
var firstNames = employees.map(getFirstname);
console.log("FirstName", firstNames)
d3.select("body")
.selectAll("h2")
.data(firstNames)
.enter()
.append("h2")
.text(function(getFirstname){
	return getFirstname
})