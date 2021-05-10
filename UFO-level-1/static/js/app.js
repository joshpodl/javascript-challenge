// from data.js
var tableData = data;

// References
var tbody = d3.select("tbody");
var inputDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
var button = d3.select("#filter-btn");
var form = d3.select("form");

// create function to convert the input date format
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    return [month, day,year].join('/');
};

// Input data into HTML
function addData(dataInput) {
    dataInput.forEach(ufoData => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoData[column])
        )
    });
};
addData(tableData);

// Create function for filtering table based on date
function filterTable() {
    
    // Prevent page from refreshing
    d3.event.preventDefault();
    
    // Filter by selected date
    var filterDate = tableData.filter(ufoData => ufoData.datetime === formatDate(inputDate));
    
    // Clear previous table data in body
    tbody.html("");

    // Append table content
    addData(filterDate);
};

// Create event handlers for clicking the button or pressing the enter key
button.on("click", filterTable);
form.on("submit", filterTable);
