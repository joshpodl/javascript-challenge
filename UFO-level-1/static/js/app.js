// from data.js
var tableData = data;

// append into table
function table(sampleData) {
    var tbody = d3.select("tbody");
    tbody.html("");
    sampleData.forEach((data)=>{
        var row = tbody.append("tr")
        Object.values(data).forEach((value)=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
table(tableData);

// filter table
function filterTable(){
    var date = d3.select("#datetime").property("value");
    if (date) {
        filterData = tableData.filter(rowData=>rowData.datetime===date);
    };
    table(filterData)
    };
d3.selectAll("#filter-btn").on("click",filterTable);