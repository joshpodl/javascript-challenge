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