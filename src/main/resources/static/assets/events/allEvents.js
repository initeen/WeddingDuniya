 
//  function validateForm() {
//     let isValid = createEventButton();
//     return isValid;
// }

// function createEventButton() {
//     let isValid = true; // Set a flag to track overall validity


//     let eventCounter = 1; // Used to track the Sr. No.

//     function resetFields() {
//         document.getElementById('eventTitle').value = '';
//         document.getElementById('eventDescription').value = '';
//         document.getElementById('sentToUsers').checked = false;
//         document.getElementById('sentToMarriageBureaus').checked = false;
//         document.getElementById('eventAddress').value = '';
//         document.getElementById('eventStartDate').value = '';
//         document.getElementById('eventEndDate').value = '';
//         document.getElementById('eventTitleError').textContent = '';
//         document.getElementById('eventDescriptionError').textContent = '';
//         document.getElementById('eventAddressError').textContent = '';
//         document.getElementById('eventStartDateError').textContent = '';
//         document.getElementById('eventEndDateError').textContent = '';
//     }


//     const eventTitle = document.getElementById('eventTitle').value;
//     const eventDescription = document.getElementById('eventDescription').value;
//     const eventAddress = document.getElementById('eventAddress').value;
//     const eventStartDate = document.getElementById('eventStartDate').value;
//     const eventEndDate = document.getElementById('eventEndDate').value;

//     if (validateForm(eventTitle, eventDescription, eventAddress, eventStartDate, eventEndDate)) {
//         createEvent();
//     }
// }

// function validateForm(eventTitle, eventDescription, eventAddress, eventStartDate, eventEndDate) {
//     let isValid = true;

//     if (eventTitle.trim() === '') {
//         document.getElementById('eventTitleError').textContent = 'Required ';
//         isValid = false;
//     } else {
//         document.getElementById('eventTitleError').textContent = '';
//     }

//     if (eventDescription.trim() === '') {
//         document.getElementById('eventDescriptionError').textContent = 'Required';
//         isValid = false;
//     } else {
//         document.getElementById('eventDescriptionError').textContent = '';
//     }

//     if (eventAddress.trim() === '') {
//         document.getElementById('eventAddressError').textContent = ' Required';
//         isValid = false;
//     } else {
//         document.getElementById('eventAddressError').textContent = '';
//     }

  
 
// // Rest of your code
// //(validateForm, createEventButton, etc.)


//     if (eventStartDate.trim() === '') {
//         document.getElementById('eventStartDateError').textContent = ' Required';
//         isValid = false;
//     } else {
//         document.getElementById('eventStartDateError').textContent = '';
//         const currentDate = new Date().toISOString().split('T')[0];
//         if (eventStartDate < currentDate) {
//             document.getElementById('eventStartDateError').textContent = 'Start Date should be today or later';
//             isValid = false;
//         }
//     }
//     if (eventStartDate.trim() === '') {
//         document.getElementById('eventEndDateError').textContent = ' Required';
//         isValid = false;
//     } else {
//         document.getElementById('eventEndDateError').textContent = '';
//         const currentDate = new Date().toISOString().split('T')[0];
//         if (eventStartDate < currentDate) {
//             document.getElementById('eventEndDateError').textContent = 'End Date should be after Start Date';
//             isValid = false;
//         }
//     }
   

//     return isValid;
// }

// // Existing functions for event handling (create, delete, edit, view)...

// //Function to set today's date as the default start date and 20 days ahead as the end date
// function setDefaultDates() {
//     // Get the current date
//     var today = new Date();
//     const dd = String(today.getDate()).padStart(2, '0');
//     const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
//     const yyyy = today.getFullYear();

//     // Format the date as "dd-mm-yyyy" for setting the input's value
//     const formattedDate = `${dd}-${mm}-${yyyy}`;

//     // Set the default value of the input box
//     document.getElementById('eventStartDate').value = formattedDate;

//     const startDateInput = document.getElementById('eventStartDate');
//     const endDateInput = document.getElementById('eventEndDate');

//     const todayISOString = new Date().toISOString().split('T')[0];

//     startDateInput.min = todayISOString;
//     startDateInput.value = formattedDate; // Set formatted date here
//     endDateInput.min = todayISOString;

//     startDateInput.addEventListener('change', function () {
//         endDateInput.min = this.value;
//         if (new Date(endDateInput.value) < new Date(this.value)) {
//             endDateInput.value = this.value;
//         }


//     });
// }

// window.onload = function () {
//     setDefaultDates(); // Set default dates when the window loads

//     // Assuming 'createEventButton' is connected to a button's click event for event creation
//     document.getElementById("createEventButton").addEventListener("click", createEventButton);
// };





 
 
 
 
 
 
 
//  // Function to reset the edit form fields and error messages
//  function resetEditForm() {
//     document.getElementById('editEventTitle').value = '';
//     document.getElementById('editEventAddress').value = '';
//     document.getElementById('editEventStartDate').value = '';
//     document.getElementById('editEventEndDate').value = '';

//     // Clear any error messages
//     document.getElementById('editEventTitleError').textContent = '';
//     document.getElementById('editEventAddressError').textContent = '';
//     document.getElementById('editEventStartDateError').textContent = '';
//     document.getElementById('editEventEndDateError').textContent = '';
// }
// document.addEventListener("DOMContentLoaded", function () {
// document.getElementById("saveEditButton").addEventListener("click", function () {
// var editEventTitle = document.getElementById("editEventTitle").value.trim();
// var editEventAddress = document.getElementById("editEventAddress").value.trim();
// var editEventStartDate = document.getElementById("editEventStartDate").value.trim();
// var editEventEndDate = document.getElementById("editEventEndDate").value.trim();

// var isValid = true;

// const titleError = document.getElementById("editEventTitleError");
// const addressError = document.getElementById("editEventAddressError");
// const startDateError = document.getElementById("editEventStartDateError");
// const endDateError = document.getElementById("editEventEndDateError");

// if (editEventTitle === "") {
//     titleError.innerText = "Please enter an Event Title.";
//     isValid = false;
// } else {
//     titleError.innerText = "";
// }

// if (editEventAddress === "") {
//     addressError.innerText = "Please enter an Event Address.";
//     isValid = false;
// } else {
//     addressError.innerText = "";
// }

// if (editEventStartDate.trim() === "") {
//     startDateError.textContent = "Start Date is required";
//     isValid = false;
// } else {
//     startDateError.textContent = "";
//     const currentDate = new Date().toISOString().split("T")[0];
//     if (editEventStartDate < currentDate) {
//         startDateError.textContent = "Start Date should be today or later";
//         isValid = false;
//     }
// }

// if (editEventEndDate.trim() === "") {
//     endDateError.textContent = "End Date is required";
//     isValid = false;
// } else {
//     endDateError.textContent = "";
//     const currentDate = new Date().toISOString().split("T")[0];
//     if (editEventStartDate > editEventEndDate) {
//         endDateError.textContent = "End Date should be after Start Date";
//         isValid = false;
//     }
// }

// return isValid;
// });

// // Function to set today's date as the default start date and adjust the end date based on the start date
// function setDefaultEditEventDates() {
// var today = new Date();
// const dd = String(today.getDate()).padStart(2, "0");
// const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
// const yyyy = today.getFullYear();

// const formattedDate = `${yyyy}-${mm}-${dd}`;

// document.getElementById("editEventStartDate").value = formattedDate;

// const startDateInput = document.getElementById("editEventStartDate");
// const endDateInput = document.getElementById("editEventEndDate");

// const todayISOString = new Date().toISOString().split("T")[0];

// startDateInput.min = todayISOString;
// startDateInput.value = formattedDate;
// endDateInput.min = todayISOString;

// startDateInput.addEventListener("change", function () {
//     endDateInput.min = this.value;
//     if (endDateInput.value < this.value) {
//         endDateInput.value = this.value;
//     }
// });
// }

// window.onload = setDefaultEditEventDates;
// });
