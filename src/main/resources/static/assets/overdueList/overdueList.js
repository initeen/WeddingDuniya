let selectedRow;

function openDepositForm(button) {
    const row = button.parentElement.parentElement;
    selectedRow = row;
    const overdueAmountCell = row.querySelector('.overdue-amount');
    const currentAmount = parseFloat(overdueAmountCell.textContent);
    if (currentAmount <= 0) {
        alert("Overdue amount is already 0.00.");
        return;
    }

    document.getElementById('marriageBureauName').value = row.cells[1].textContent;
    document.getElementById('ownerName').value = row.cells[2].textContent;
    document.getElementById('contactNo').value = row.cells[3].textContent;
    document.getElementById('location').value = row.cells[4].textContent;
    document.getElementById('overdueAmount').value = overdueAmountCell.textContent;

    document.getElementById('depositForm').style.display = 'block';
}

function depositAmount() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid deposit amount.");
    } else {
        const overdueAmountCell = selectedRow.querySelector('.overdue-amount');
        const currentAmount = parseFloat(overdueAmountCell.textContent);
        const newAmount = currentAmount - depositAmount;
        overdueAmountCell.textContent = newAmount.toFixed(2);
        closeDepositForm();
    }
}

function closeDepositForm() {
    document.getElementById('depositForm').style.display = 'none';
    document.getElementById("depositAmount").value = '';
}

function confirmDisable(button) {
    const confirmed = confirm("Are you sure you want to disable this entry?"); // Display a confirmation pop-up

    if (confirmed) {
        // Perform the disable action here
        const row = button.parentElement.parentElement;
        row.classList.toggle('disabled'); // Toggle the "disabled" class
    }
}

 // Set current time value to the input field
 const d = new Date();
 const hours = d.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if needed
 const minutes = d.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if needed
 const seconds = d.getSeconds().toString().padStart(2, '0'); // Get seconds and pad with leading zero if needed
 const timeString = `${hours}:${minutes}:${seconds}`; // Construct the time string
 document.getElementById("currentTime").value = timeString; // Set the value of the input field

function confirmDeposit() {
    const depositAmount = parseFloat(document.getElementById("depositAmount").value);
    const txnId = document.getElementById("txnid").value.trim();
    const currentTimeInput = document.getElementById("currentTime").value.trim();
    const errorMessage = document.getElementById("error-message-currentTime");

    // Clear previous error messages
    document.getElementById("error-message-depositAmount").textContent = "";
    document.getElementById("error-message-txnid").textContent = "";
    errorMessage.textContent = "";

    if (isNaN(depositAmount) || depositAmount <= 0) {
        document.getElementById("error-message-depositAmount").textContent = "Enter a valid amount";
        return;
    }

    const overdueAmountCell = selectedRow.querySelector('.overdue-amount');
    const currentAmount = parseFloat(overdueAmountCell.textContent);

    if (depositAmount > currentAmount) {
        document.getElementById("error-message-depositAmount").textContent = "Enter a valid amount";
        return;
    }

    if (txnId === "") {
        document.getElementById("error-message-txnid").textContent = "Enter a valid transaction ID";
        return;
    }

    // Check if the time input is empty
    if (currentTimeInput === "") {
        errorMessage.textContent = "Time field is required";
        return;
    }

    // Validate time format
    if (!validateTime(currentTimeInput)) {
        errorMessage.textContent = "Enter a valid time in HH:mm format";
        return;
    }

   


    const confirmationMessage = `Are you sure you want to deposit Rs.${depositAmount.toFixed(2)}?`;

    if (confirm(confirmationMessage)) {
        // If confirmed, show a reconfirmation dialog
        const reconfirmationMessage = `Do you really want to proceed with this deposit?`;
        if (confirm(reconfirmationMessage)) {
            // If reconfirmed, perform the deposit action
            const newAmount = currentAmount - depositAmount;
            overdueAmountCell.textContent = newAmount.toFixed(2);

            // Update the "Overdue Date" to current date + 15 days
            const currentDateField = document.getElementById("currentDate");
            const currentDate = new Date(currentDateField.value);
            currentDate.setDate(currentDate.getDate() + 0);

            // Format the updated date as YYYY-MM-DD
            const updatedDate = currentDate.toISOString().split('T')[0];
            document.getElementById("currentDate").value = updatedDate;

            // You may want to store or process the transaction ID here

            closeDepositForm();

            if (newAmount <= 0) {
                deleteRow(selectedRow);
            }
        }
    }
}



function deleteRow(row) {
    const table = document.getElementById("marriageBureauTable");
    table.deleteRow(row.rowIndex);
}

 // Function to populate the "Current Date" field with the system date
 function populateCurrentDate() {
    const currentDateField = document.getElementById("currentDate");
    const today = new Date();

    // Format the date as YYYY-MM-DD (you can change the format as needed)
    const formattedDate = today.toISOString().split('T')[0];

    currentDateField.value = formattedDate;
}

// Call the function when the page loads
window.onload = populateCurrentDate;

function printList() {
    // Use window.print() to trigger the print dialog
    window.print();
}