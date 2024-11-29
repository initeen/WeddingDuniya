function notification() {
            var now = new Date();

            // Format time in HH:MM format
            var hh = String(now.getHours()).padStart(2, '0');
            var mm = String(now.getMinutes()).padStart(2, '0');

            var formattedTime = hh + ':' + mm;

            // Set the value of all elements with class 'createTime' to the current time
            var elements = document.getElementsByClassName('createTime');
            for (var i = 0; i < elements.length; i++) {
                elements[i].value = formattedTime;
            }
        }

        var storedDescription;
        var storedcreateDate;
        var storedcreateTime;
        function createNotification() {
            // Get values from the form
            var title = document.getElementById("notificationTitle").value.trim();
            var description = document.getElementById("notificationDescription").value.trim();
            var sentToUsers = document.getElementById("sentToUsers").checked;
            var sentToMarriageBureaus = document.getElementById("sentToMarriageBureaus").checked;
            var createDate = document.getElementById("createDate").value.trim();
            var createTime = document.getElementById("createTime").value.trim();

            // Get current date and time
            // Get current date and time
            var currentDate = new Date();
            var currentDateString = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD  

            var currentTimeString = currentDate.toTimeString().slice(0, 8); // Format: HH:MM:SS


            // Validate form fields
            var isValid = true;
            if (title === "") {
                document.getElementById("error-message-notificationTitle").textContent = "Required";
                isValid = false;
            } else {
                document.getElementById("error-message-notificationTitle").textContent = "";
            }

            if (description === "") {
                document.getElementById("error-message-notificationDescription").textContent = "Required";
                isValid = false;
            } else {
                document.getElementById("error-message-notificationDescription").textContent = "";
            }
            // Validate Create Date
            if (createDate === "") {
                document.getElementById("error-message-createDate").textContent = "Required";
                isValid = false;
            } else if (createDate !== currentDateString) {
                document.getElementById("error-message-createDate").textContent = "Create Date should not be before the current date.";
                isValid = false;
            } else {
                document.getElementById("error-message-createDate").textContent = "";
            }

            // Validate Create Time



            if (!sentToUsers && !sentToMarriageBureaus) {
                document.getElementById("error-message-sentToUsers").textContent = "Please select one recipient.";
                isValid = false;
            } else {
                document.getElementById("error-message-sentToUsers").textContent = "";
            }

            // Clear the error message for marriage bureaus checkbox
            document.getElementById("error-message-sentToMarriageBureaus").textContent = "";


            // If form is valid, proceed to create notification
            if (isValid) {

                // Create a new row for the table
                var table = document.getElementById("notificationTableBody");
                var sl = table.rows.length;
                var row = table.insertRow(table.rows.length);
                row.insertCell(0).innerHTML = sl;
                row.insertCell(1).innerHTML = title;
                row.insertCell(2).innerHTML = createDate;
                row.insertCell(3).innerHTML = createTime;
                storedDescription = document.getElementById("notificationDescription").value;
                storedcreateDate = document.getElementById("createDate").value;
                storedcreateTime = document.getElementById("createTime").value;
                console.log("storedDescription", storedDescription)

                // Add Action buttons for view, edit, delete
                var actionCell = row.insertCell(4);
                actionCell.innerHTML = `<button class="btn btn-info btn-sm" onclick="viewNotification(${sl})">View</button>
                        <button class="btn btn-warning btn-sm" onclick="editNotification(${sl})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteNotification(${sl})">Delete</button>`;

                // Close the modal
                $('#addNotificationModal').modal('hide');

                // Reset form fields
                document.getElementById("notificationTitle").value = "";
                document.getElementById("notificationDescription").value = "";
                document.getElementById("sentToUsers").checked = false;
                document.getElementById("sentToMarriageBureaus").checked = false;
                document.getElementById("createDate").value = "";
                // document.getElementById("createTime").value = "";

            }
        }
        function viewNotification(sl) {
            // Get the table row corresponding to the selected notification
            var table = document.getElementById("notificationTableBody");
            var row = table.rows[sl]; // Adjust for 0-based indexing

            // Retrieve notification details from the table row
            var title = row.cells[1].innerText;
            var description = row.cells[1].innerText; // Assuming description is in the second cell
            var createDate = row.cells[2].innerText;
            var createTime = row.cells[3].innerText;
            var description = storedDescription;
            // Populate the modal with notification details
            document.getElementById("viewTitle").innerText = title;
            document.getElementById("viewDescription").innerText = description;
            document.getElementById("viewCreateDate").innerText = createDate;
            document.getElementById("viewCreateTime").innerText = createTime;

            // Show the viewNotificationModal
            $('#viewNotificationModal').modal('show');
        }
        function editNotification(sl) {
            // Get the table row corresponding to the selected notification
            var table = document.getElementById("notificationTableBody");
            var row = table.rows[sl]; // Adjust for 0-based indexing

            // Retrieve notification details from the table row
            var sno = row.cells[0].innerText;
            var title = row.cells[1].innerText; // Adjusted index for title
            var description = row.cells[2].innerText;
            var createDate = row.cells[3].innerText;
            var createTime = row.cells[4].innerText;
            var description = storedDescription;
            var createDate = storedcreateDate;
            var createTime = storedcreateTime;

            console.log("description", description);

            // Populate the edit form fields with notification details
            document.getElementById("editNotificationTitle").value = title;
            document.getElementById("editNotificationDescription").value = description;
            document.getElementById("editCreateDate").value = createDate;
            document.getElementById("editCreateTime").value = createTime;

            // Show the editNotificationModal
            $('#editNotificationModal').modal('show');
        }

        function validateEditNotificationForm() {
    var title = document.getElementById("editNotificationTitle").value.trim();
    var description = document.getElementById("editNotificationDescription").value.trim();
    var createDate = document.getElementById("editCreateDate").value.trim();
    var createTime = document.getElementById("editCreateTime").value.trim();

    // Reset error messages
    document.getElementById("error-message-editNotificationTitle").innerHTML = "";
    document.getElementById("error-message-editNotificationDescription").innerHTML = "";
    document.getElementById("error-message-editCreateDate").innerHTML = "";
    document.getElementById("error-message-editCreateTime").innerHTML = "";

    var isValid = true;

    // Validate title
    if (title === "") {
        document.getElementById("error-message-editNotificationTitle").innerHTML = "Required";
        isValid = false;
    }

    // Validate description
    if (description === "") {
        document.getElementById("error-message-editNotificationDescription").innerHTML = "Required";
        isValid = false;
    }

    // Validate create date
    if (createDate === "") {
        document.getElementById("error-message-editCreateDate").innerHTML = "Required";
        isValid = false;
    }

    // Validate create time
    if (createTime === "") {
        document.getElementById("error-message-editCreateTime").innerHTML = "Required";
        isValid = false;
    }

    // Hide the modal if all fields are valid
    if (isValid) {
        $('#editNotificationModal').modal('hide');
    }

    return isValid;
}

        // Function to update the notification
        function updateNotification() {
            // Validate the form
            var isValid = validateEditNotificationForm();

            if (isValid) {
                // If form is valid, proceed with updating notification
                // Add your code here to update the notification
                console.log("Notification updated successfully.");
                // Close the modal
                // $('#editNotificationModal').modal('hide');
            }
        }



        // Function to reset the form
        function resetForm() {
            document.getElementById("editNotificationForm").reset();
        }
        // function deleteNotification(sl) {
        //     // Table se row ko identify karne ke liye unique identifier "sl" ka istemal karenge.
        //     // Yeh example ke liye assume karta hai ki table ka id "notificationTable" hai.
        //     var table = document.getElementById("notificationTableBody");

        //     // Table se specific row ko delete karne ke liye row index ko use karenge.
        //     // Agar aapke pass row index hai, toh aap table se row ko seedha delete kar sakte hain.
        //     // Agar unique identifier "sl" ka istemal karna hai, toh aap pehle us row ka index khoj sakte hain.
        //     var rowIndex = -1;
        //     for (var i = 0; i < table.rows.length; i++) {
        //         // Assume karein ki table mein har row ka first cell "sl" hai.
        //         if (table.rows[i].cells[0].innerText == sl) {
        //             rowIndex = i;
        //             break;
        //         }
        //     }

        //     // Ab rowIndex check karenge aur agar row mil gayi hai toh use delete karenge.
        //     if (rowIndex !== -1) {
        //         table.deleteRow(rowIndex);
        //     } else {
        //         console.log("Notification with sl " + sl + " not found.");
        //     }
        // }
        var deleteRowIndex; // Variable to store the index of the row to be deleted

        // Function to set the deleteRowIndex when delete link is clicked
        function setDeleteRowIndex(rowIndex) {
            deleteRowIndex = rowIndex;
        }

        // Function to delete the notification record
        function deleteNotification(sl) {
            // Set the deleteRowIndex
            var table = document.getElementById("notificationTableBody");
            for (var i = 0; i < table.rows.length; i++) {
                if (table.rows[i].cells[0].innerText == sl) {
                    deleteRowIndex = i;
                    break;
                }
            }

            // Open the confirmation modal
            $('#deleteNotificationModal').modal('show');
        }

        // Function to confirm deletion
        function confirmDelete() {
            // Your deletion logic here
            const table = document.getElementById('notificationTableBody');
            table.deleteRow(deleteRowIndex);

            $('#deleteNotificationModal').modal('hide');
        }

