// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Reference to tbody
var tbody = d3.select("tbody");

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select input date and get its value
    var dateEntered = d3.select("#datetime").property("value");

    // Filter by selected date
    var dateFiltered = tableData.filter(tableData.datetime == dateEntered);

    // Clear previous table data
    d3.selectAll('#ufo-table>tbody>tr').remove();

    // Append data for entered date
    dateFiltered.forEach((tableData)=> {
        var row = tbody.append("tr");
        Object.entries(tableData).forEach(([key, value])=> {
          var cell = row.append("td");
          cell.text(value); 
        });
    });
};