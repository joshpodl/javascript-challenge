// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// create function to convert the input date format
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    return [month,day,year].join('/');
};

// Reference to tbody
var tbody = d3.select("tbody");

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select input date and get its value
    let dateEntered = d3.select("#datetime").property("value");
    dateEntered = formatDate(dateEntered);
    console.log(dateEntered);

    // Filter by selected date
    let dateFiltered = tableData.filter(ufoDate => ufoDate.datetime == dateEntered);
    console.log(dateFiltered);

    // Clear previous table data
    d3.selectAll('#ufo-table>tbody>tr').remove();

    // Append data for entered date
    dateFiltered.forEach((ufoDate)=> {
        let row = tbody.append("tr");
        Object.entries(ufoDate).forEach(([key, value])=> {
          var cell = row.append("td");
          cell.text(value); 
        });
    });
};