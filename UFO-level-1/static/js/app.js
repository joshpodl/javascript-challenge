// from data.js
var tableData = data;

// Create references
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Input data into HTML
function addData(dataInput) {
    dataInput.forEach((ufoData) => {
        let row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
addData(tableData);

// Create function for filtering table based on input date
function filterTable() {
    
    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input date and get the value property of the input element
    let inputDate=d3.select("#datetime").property("value");
    // Print input date to the console
    console.log(inputDate);
    
    // Filter by selected date
    let filterDate = tableData.filter(ufoData => ufoData.datetime == inputDate);
    // Print data for selected date
    console.log(filterDate);
    
    // Clear previous table data
    tbody.html("");

    // Append table content
    addData(filterDate);
};


// Create event handler with filter table function for clicking button or pressing enter
button.on("click", filterTable);
form.on("submit", filterTable);