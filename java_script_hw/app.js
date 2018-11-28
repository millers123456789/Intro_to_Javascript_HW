
// Iterate through each report object

//sighting is table item

var ufo = data;
var submit = d3.select("#filter-btn");

submit.on("click", function() {

 

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
 // Prevent the page from refreshing
 d3.event.preventDefault();

 var filteredData = ufo.filter(sighting => sighting.datetime === inputValue);
  


var tbody = d3.select("tbody");
console.log(ufo);



// BONUS: Refactor to use Arrow Functions!
filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});
