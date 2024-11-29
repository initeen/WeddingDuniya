
function addDesignation() {
    resetErrorMessages(); // Reset error messages

    var isValid = true;

    // Validate Designation Name
    var designationName = document.getElementById("createDesignationName").value.trim();
    if (designationName === "") {
        document.getElementById("error-messages-createDesignationName").innerHTML = "Designation Name is required";
        isValid = false;
    }

    // Validate Department
    var department = document.getElementById("createDepartment").value;
    if (department === "") {
        document.getElementById("error-messages-createDepartment").innerHTML = "Department is required";
        isValid = false;
    }

    // Validate Permission
    var permissions = document.querySelectorAll('input[type=checkbox]:checked');
    if (permissions.length === 0) {
        document.getElementById("error-messages-createPermission").innerHTML = "Please select at least one permission";
        isValid = false;
    }

    if (isValid) {
        // Incremental counter for serial number
        var serialNumber = document.getElementById("designationTableBody").getElementsByTagName("tr").length + 1;

        // Gather data from form fields
        var permissionsArray = [];
        permissions.forEach(function (checkbox) {
            permissionsArray.push(checkbox.value);
        });
        var newRow = "<tr><td>" + serialNumber + "</td><td>" + designationName + "</td><td>" + department + "</td><td>" + permissionsArray.join(", ") + "</td><td>" +
            '<button type="button" class="btn btn-info btn-sm" onclick="viewDesignation(this)">View</button>' +
            '<button type="button" class="btn btn-warning btn-sm" onclick="editDesignation(this)">Edit</button>' +
            '<button type="button" class="btn btn-danger btn-sm" onclick="deleteDesignation(this)">Delete</button>' +
            "</td></tr>";

        // Append the new row to the table body
        var tableBody = document.getElementById("designationTableBody");
        tableBody.insertAdjacentHTML('beforeend', newRow);

        // Reset form fields
        document.getElementById("createDesignationName").value = "";
        document.getElementById("createDepartment").value = "";
        permissions.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        // Close the modal
        $('#createDesignationModal').modal('hide');
    }
}
function resetForm() {
    // Reset the input field for Designation Name
    document.getElementById("createDesignationName").value = "";
    
    // Reset the select field for Department
    document.getElementById("createDepartment").selectedIndex = 0;
    
    // Reset the checkboxes for Permissions
    var permissionCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    permissionCheckboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    
    // Reset any error messages
    resetErrorMessages();
}


function resetErrorMessages() {
    document.getElementById("error-messages-createDesignationName").innerHTML = "";
    document.getElementById("error-messages-createDepartment").innerHTML = "";
    document.getElementById("error-messages-createPermission").innerHTML = "";
}
function viewDesignation(button) {
    // Retrieve the data from the corresponding row
    var row = button.closest('tr');
    var designationName = row.cells[1].innerText;
    var department = row.cells[2].innerText;
    var permissions = row.cells[3].innerText;

    // Populate the fields in the view modal
    document.getElementById('viewDesignationName').value = designationName;
    document.getElementById('viewDepartment').value = department;
    document.getElementById('viewPermissions').value = permissions;

    // Show the view modal
    $('#viewDesignationModal').modal('show');
}
function editDesignation(button) {
    // Get the closest row to the button clicked
    var row = button.closest('tr');

    // Extract designation name and department from the row
    var cells = row.cells;
    var designationName = cells[1].innerText.trim();
    var department = cells[2].innerText.trim();

    // Populate the fields in the edit modal
    document.getElementById('editDesignationName').value = designationName;
    document.getElementById('editDepartment').value = department;

    // Retrieve the checkbox element

    var permission = cells[3].innerText.trim();
    var createPermissionOfferPageCheckbox = document.getElementById("editPermission1");
    var value2 = document.getElementById("editPermission2");
    var value3 = document.getElementById("editPermission3");
    var value4 = document.getElementById("editPermission4");
    var value5 = document.getElementById("editPermission5");

    console.log("permission", permission);

    // Check if permission has a value
    if (permission) {
        // If permission has a value, check all checkboxes
        createPermissionOfferPageCheckbox.checked = true;
        value2.checked = true;
        value3.checked = true;
        value4.checked = true;
        value5.checked = true;
    } else {
        // If permission does not have a value, uncheck all checkboxes
        createPermissionOfferPageCheckbox.checked = false;
        value2.checked = false;
        value3.checked = false;
        value4.checked = false;
        value5.checked = false;
    }





    // Show the edit modal
    $('#editDesignationModal').modal('show');
}

function updateDesignation() {
    var isValid = true;

    // Reset error messages
    document.getElementById("error-message-editdesignationName").innerHTML = "";
    document.getElementById("error-message-editDepartment").innerHTML = "";
    document.getElementById("error-message-editPermission").innerHTML = "";

    // Validate Designation Name
    var designationName = document.getElementById("editDesignationName").value;
    if (designationName.trim() === "") {
        document.getElementById("error-message-editdesignationName").innerHTML = "Designation Name is required";
        isValid = false;
    }

    // Validate Department
    var department = document.getElementById("editDepartment").value;
    if (department === "select_department") {
        document.getElementById("error-message-editDepartment").innerHTML = "Please select a department";
        isValid = false;
    }

    // Validate Permissions
    var permissions = document.querySelectorAll('#editDesignationModal input[type="checkbox"]:checked');
    if (permissions.length === 0) {
        document.getElementById("error-message-editPermission").innerHTML = "Please select at least one permission";
        isValid = false;
    }

    // If all validations pass, hide the modal
    if (isValid) {
        $('#editDesignationModal').modal('hide');
    }

    return isValid;
}


function resetEditForm() {
    // Reset form fields
    document.getElementById("editDesignationForm").reset();

    // Reset error messages
    document.getElementById("error-message-editdesignationName").innerHTML = "";
    document.getElementById("error-message-editDepartment").innerHTML = "";
    document.getElementById("error-message-editPermission").innerHTML = "";
}


// function deleteDesignation(button) {
//     // Get the row associated with the delete button and remove it
//     var row = button.closest('tr');
//     row.remove();
// }

// function deleteDesignation(button) {
//     // Get the row associated with the delete button
//     var row = button.closest('tr');

//     // Get the ID of the designation from the row
//     var designationId = row.getAttribute('data-designation-id');

//     // Set the ID in the hidden input field
//     document.getElementById('deleteDesignationId').value = designationId;

//     // Show the delete confirmation modal
//     $('#deleteConfirmationModal').modal('show');
// }
// function confirmDeleteDesignation() {
//     // Get the designation ID from the hidden input field
//     var designationId = document.getElementById('deleteDesignationId').value;
// Define deleteRowIndex globally
var deleteRowIndex; // Variable to store the index of the row to be deleted

// Function to set the deleteRowIndex when delete button is clicked
function setDeleteRowIndex(rowIndex) {
    deleteRowIndex = rowIndex;
}

// Function to delete the designation
function deleteDesignation(designationName) {
    // Set the deleteRowIndex
    var table = document.getElementById("designationTableBody");
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].cells[1].innerText == designationName) { // Assuming designation name is in the second cell
            deleteRowIndex = i;
            break;
        }
    }

    // Open the confirmation modal
    $('#deleteConfirmationModal').modal('show');
}

// Function to confirm deletion
function confirmDeleteDesignation() {
    // Your deletion logic here
    const table = document.getElementById('designationTableBody');
    table.deleteRow(deleteRowIndex);

    $('#deleteConfirmationModal').modal('hide');
}
