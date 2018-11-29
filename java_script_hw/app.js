
// Iterate through each report object

//sighting is table item

var ufo = data;
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

var populate = (dataInput) => {

  dataInput.forEach(ufo_sightings => {
      var row = tbody.append("tr");
      columns.forEach(column => row.append("td").text(ufo_sightings[column])
      )
  });
}
populate(ufo);

submit.on("click", function() {

  
 

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value").trim();
 // Prevent the page from refreshing
 d3.event.preventDefault();

 var filteredData = ufo.filter(ufo => ufo.datetime === inputValue);
  
 tbody.html("");

//var tbody = d3.select("tbody");
console.log(ufo);



// BONUS: Refactor to use Arrow Functions!
filteredData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  
});


