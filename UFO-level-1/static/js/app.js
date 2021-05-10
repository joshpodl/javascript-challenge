// from data.js
var tableData = data;

// Reference table body and button 
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Function to convert the input date format
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    return [month,day,year].join('/');
};

// Input data into HTML
function addData(dataInput) {
    tbody.html("");
    dataInput.forEach((ufoData) => {
        let row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
addData(tableData);

// Create event handler with function for filtering table based on date
function filterTable() {
    
    // Prevent page from refreshing
    d3.event.preventDefault();

    // Select the input date and get the value property of the input element
    let inputDate=d3.select("#datetime").property("value");
    // print the value to the console
    inputDate=formatDate(inputDate);
    console.log(inputDate);
    
    // Filter by selected date
    var filterDate = tableData.filter(ufoData => ufoData.datetime == inputDate);
    console.log(filterDate);
    
    // Clear previous table data in body
    tbody.html("");

    // Append table content
    filterDate.forEach((ufoData) => {
        let row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value])=> {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


// Create event handler with filter table function
button.on("click", filterTable);