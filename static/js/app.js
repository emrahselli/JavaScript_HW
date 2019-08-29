// Loading all UFO sighting data into HTML table
// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each UFO sighting object
tableData.forEach(function(UFOsighting) {
  console.log(UFOsighting);
  var row = tbody.append("tr");
   // Use `Object.entries` to console.log each UFO sighting value
   Object.entries(UFOsighting).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value in the UFO sighting object
     var cell = row.append("td");
     cell.text(value);
  });
});

// Filtering by date
// Select the button
var button = d3.select("#filter-btn");

// Creating event listener
button.on("click", function() {
  // First deleting the old rows from table
  var table = document.getElementById("ufo-table");
  for(var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  // Get the value property of the input elements
  var inputDate = d3.select("#datetime").property("value");
  var inputCountry = d3.select("#country").property("value");
  // filtering data matcing the input values
  var filteredData = tableData.filter(sighting => sighting.datetime === inputDate && sighting.country === inputCountry);

  console.log(filteredData);
  
  // Reload the table, this time using filteredData instead of tableData
  // Use d3 to append one table row `tr` for each UFO sighting object
  filteredData.forEach(function(UFOsighting) {
    var row = tbody.append("tr");
     // Use `Object.entries` to console.log each UFO sighting value
     Object.entries(UFOsighting).forEach(function([key, value]) {
       console.log(key, value);
       // Append a cell to the row for each value in the UFO sighting object
       var cell = row.append("td");
       cell.text(value);
    });
  });
});