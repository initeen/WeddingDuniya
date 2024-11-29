// userReports 

function getUserReport() {
    // ... (existing code)

    // Dummy data for demonstration (replace with actual fetched data)
    var dummyData = [
        { sl: 1, userName: 'John Doe', status: 'Active', location: 'Location 1', contactNumber: '1234567890', userEmail: 'john@example.com' },
        { sl: 2, userName: 'Jane Smith', status: 'Inactive', location: 'Location 2', contactNumber: '9876543210', userEmail: 'jane@example.com' },
        { sl: 3, userName: 'Alice Johnson', status: 'Active', location: 'Location 3', contactNumber: '5555555555', userEmail: 'alice@example.com' },
        // Add more data objects as needed
        // ...
        { sl: 17, userName: 'Bob Brown', status: 'Active', location: 'Location 17', contactNumber: '8888888888', userEmail: 'bob@example.com' },
    ];

    // Get the table body element
    var tableBody = document.getElementById('reportTableBody');

    // Clear previous table rows
    tableBody.innerHTML = '';

    // Populate the table with fetched data
    dummyData.forEach(function (user) {
        var row = tableBody.insertRow();
        var cells = [user.sl, user.userName, user.status, user.location, user.contactNumber, user.userEmail];

        cells.forEach(function (cellContent, index) {
            var cell = row.insertCell(index);
            cell.textContent = cellContent;
        });
    });

}

// userReports end here
//------------------------------------------------------------------------------------------------------------------------------------------------------


//marriageBureauReports start here
function getMarriageBureauReport() {
    // Get selected values from dropdowns
    var location = document.getElementById("locationSelect").value;
    var overdue = document.getElementById("overdueMarraigeBeuros").value;
    var status = document.getElementById("statusSelect").value;
    var reportType = document.getElementById("mbreportSelect").value;

    // Replace this part with your actual data fetching logic
    // For demonstration, let's assume you have an array of data
    var data = [
        { sl: 1, name: "Marriage Bureau 1", status: "Active", location: "Location 1", contactNumber: "1234567890", email: "mb1@example.com" },
        { sl: 2, name: "Marriage Bureau 2", status: "Deactive", location: "Location 2", contactNumber: "9876543210", email: "mb2@example.com" }
        // Add more data as needed
    ];

    // Get the tbody element to append rows
    var tbody = document.getElementById("reportTableBody");

    // Clear existing rows
    tbody.innerHTML = "";

    // Populate the table
    for (var i = 0; i < data.length; i++) {
        var row = "<tr><td>" + data[i].sl + "</td><td>" + data[i].name + "</td><td>" + data[i].status + "</td><td>" + data[i].location + "</td><td>" + data[i].contactNumber + "</td><td>" + data[i].email + "</td></tr>";
        tbody.innerHTML += row;
    }
}

//marriageBureauReports end here

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//paymentReports start here
function updateTableVisibility() {
    var selectedOption = document.getElementById("selectPaymentType").value;

    // Hide both tables
    document.getElementById("allPaymentTable").classList.add('hidden');
    document.getElementById("overdueTable").classList.add('hidden');

    // Show the selected table
    if (selectedOption === "all") {
        document.getElementById("allPaymentTable").classList.remove('hidden');
    } else if (selectedOption === "overdue") {
        document.getElementById("overdueTable").classList.remove('hidden');
    }
}

function getReport() {
    // Mock data for testing, replace this with your actual data
    var allPaymentData = [
        { Date: '2024-02-01', Time: '10:30 AM', TransactionID: '12345', PaymentBy: 'John Doe', Amount: '$100.00' },
        { Date: '2024-02-02', Time: '11:45 AM', TransactionID: '67890', PaymentBy: 'Jane Smith', Amount: '$75.00' },
    ];

    var overdueData = [
        { SL: '1', BureauName: 'Bureau 1', OwnerName: 'Owner 1', ContactNumber: '123-456-7890', Location: 'Location 1', OverdueAmount: '$50.00', OverdueDate: '2024-02-10' },
        { SL: '2', BureauName: 'Bureau 2', OwnerName: 'Owner 2', ContactNumber: '987-654-3210', Location: 'Location 2', OverdueAmount: '$75.00', OverdueDate: '2024-02-15' },
    ];

    displayReport(allPaymentData, overdueData);
}

function displayReport(allPaymentData, overdueData) {
    // Display All Payment History
    var allPaymentTableBody = document.getElementById("allPaymentTable").getElementsByTagName('tbody')[0];
    allPaymentTableBody.innerHTML = "";
    allPaymentData.forEach(function (row) {
        var tr = document.createElement("tr");
        Object.values(row).forEach(function (value) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(value));
            tr.appendChild(td);
        });
        allPaymentTableBody.appendChild(tr);
    });

    // Display Overdue
    var overdueTableBody = document.getElementById("overdueTable").getElementsByTagName('tbody')[0];
    overdueTableBody.innerHTML = "";
    overdueData.forEach(function (row) {
        var tr = document.createElement("tr");
        Object.values(row).forEach(function (value) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(value));
            tr.appendChild(td);
        });
        overdueTableBody.appendChild(tr);
    });

    // Update table visibility based on the selected option
    updateTableVisibility();
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------