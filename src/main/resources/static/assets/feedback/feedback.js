//reply MBs form
$(document).ready(function () {
    //Initialize Quill
    var quill = new Quill('#editor-container', {
        theme: 'snow'
    });

    // Handle the "Reply" button click
    $('.btn-reply').click(function () {
        // Get the row ID from the data attribute
        var rowId = $(this).closest('tr').data('rowid');

        // Retrieve data from the corresponding row and populate the modal form
        var mbID = $('#marriageBeuroTable tbody tr[data-rowid="' + rowId + '"] td:eq(1)').text();
        var mbEmail = $('#marriageBeuroTable tbody tr[data-rowid="' + rowId + '"] td:eq(2)').text();
        var subject = $('#marriageBeuroTable tbody tr[data-rowid="' + rowId + '"] td:eq(3)').text();
        var feedback = $('#marriageBeuroTable tbody tr[data-rowid="' + rowId + '"] td:eq(4)').text();
        var sentDate = $('#marriageBeuroTable tbody tr[data-rowid="' + rowId + '"] td:eq(5)').text();

        // Populate the modal form fields with the retrieved data
        $('#mbID').val(mbID);
        $('#mbEmail').val(mbEmail);
        $('#subject').val(subject);
        $('#sentDate').val(sentDate);
        $('#feedback').val(feedback);
        // Set the content of the Quill editor
        quill.root.innerHTML = feedback;

        // // Populate the "Feedback" and "Sent Date" fields
        // $('#feedback').val(feedback);
        // $('#sentDate').val(sentDate);

        // Show the "Send Reply" button
        $('#sendReplyButton').show();
    });

    // Handle the "Send Reply" button click
    $('#sendReplyButton').click(function () {
        // Get the HTML content from the Quill editor
        var replyContent = quill.root.innerHTML;

        // Perform actions to send the reply, e.g., submit the form or make an API call with replyContent
        // You can implement this part based on your specific needs.
    });
});

// JavaScript for User Reply Modal
$(document).ready(function () {
    // Function to populate the User reply modal with data
    function populateUserReplyModal(row) {
        var userSentDate = $(row).find('td:eq(5)').text();
        var userID = $(row).find('td:eq(1)').text();
        var userEmail = $(row).find('td:eq(2)').text();
        var userSubject = $(row).find('td:eq(3)').text();
        var userFeedback = $(row).find('td:eq(4)').text();

        $('#userSentDate').val(userSentDate);
        $('#userID').val(userID);
        $('#userEmail').val(userEmail);
        $('#userSubject').val(userSubject);
        $('#userFeedback').val(userFeedback);
        // Additional code to initialize the Quill editor for "User Reply Feedback" if needed
    }

    // Trigger the User reply modal when the "Reply" button is clicked
    $('#userTable').on('click', '.btn-reply', function () {
        var row = $(this).closest('tr');
        populateUserReplyModal(row);
    });

    // Additional code to handle sending the User reply and any other functionality
});

// JavaScript for User Reply Modal with Quill Editor
$(document).ready(function () {
    // Initialize Quill Editor for "userReplyFeedback" in the User reply modal
    var quillUserReplyFeedback = new Quill('#userEditor-container', {
        theme: 'snow' // or use another Quill theme of your choice
    });

    // Populate the Quill Editor with existing reply feedback content
    var existingReplyFeedback = "Your existing reply feedback content here"; // Replace with your actual data
    quillUserReplyFeedback.clipboard.dangerouslyPasteHTML(existingReplyFeedback);

    // ... Add the rest of your JavaScript code, such as populating the modal with data and handling user interactions.
});

// Variables to capture user feedback and sent feedback reply
let userFeedbackData = '';
let sentFeedbackReplyData = '';

// Function to send a reply from the user feedback modal
function sendUserReply() {
    // Capture and send the reply feedback
    sentFeedbackReplyData = document.getElementById('userReplyFeedback').innerHTML;
    // Close the user feedback modal
    $('#userReplyModal').modal('hide');
}

// Function to view the sent feedback reply
function viewSentFeedbackReply() {
    // Populate the viewSentReplyModal with the sent feedback reply data
    document.getElementById('sentFeedbackReplyContainer').innerHTML = sentFeedbackReplyData;
    // Show the viewSentReplyModal
    $('#viewSentReplyModal').modal('show');
}

// Function to open the user feedback modal and populate data
function openUserFeedbackModal(userId, userEmail, subject, feedback, sentDate) {
    // Populate user feedback data
    document.getElementById('userID').value = userId;
    document.getElementById('userEmail').value = userEmail;
    document.getElementById('userSubject').value = subject;
    document.getElementById('userFeedback').value = feedback;
    document.getElementById('userSentDate').value = sentDate;
    
    // Clear any previous sent feedback reply data
    sentFeedbackReplyData = '';

    // Show the user feedback modal
    $('#userReplyModal').modal('show');
}

// Function to view the sent feedback reply for Marriage Beuro tab
function viewSentFeedbackReplyForMarriageBeuro() {
    // Populate the viewSentReplyModal with the sent feedback reply data for Marriage Beuro
    document.getElementById('sentFeedbackReplyContainer').innerHTML = sentFeedbackReplyData;
    // Show the viewSentReplyModal
    $('#viewSentReplyModal').modal('show');
}

// Function to view the sent feedback reply for User tab
 // JavaScript function to view the sent feedback reply for the User tab
 function viewSentFeedbackReplyForUser() {
    // Replace this with your logic to retrieve the sent feedback reply content
    var sentUserFeedback = "This is the sent feedback reply content."; // Replace with actual content

    // Populate the modal with the sent reply feedback content
    document.getElementById('sentUserFeedbackContent').innerHTML = sentUserFeedback;

    // Show the modal to view the sent reply feedback
    $('#viewSentUserFeedbackModal').modal('show');
}



document.addEventListener("DOMContentLoaded", function () {
    var quill = new Quill('#editor-container-1', {
        theme: 'snow' // Choose your desired theme
    });

    

    $("#userSendReplyButton2").on('click', function(){
        var errorMessage1 = document.getElementById("error-message1-user");
        var userFeedback = document.getElementById("userFeedback");
   //     alert("shf");
            var content = quill.getText().trim();

            // Reset error messages
            errorMessage1.style.display = "none";
            // userFeedback.style.display = "none";

            if (content === '') {
                console.log('...userContent...', content)
                errorMessage1.style.display = "block";
            } else {
                // If validation succeeds, continue with sending the reply

                
                var replyContent = quill.root.innerHTML;
                console.log("Reply content:", replyContent);
                // Add your code here to send the reply

                // Clear the editor content after sending the reply
                quill.setText('');
            }

            // Additional validation for userFeedback
            var userContent = userFeedback.value.trim();
            // alert(userContent);
            // if (userContent === '') {
               
            //     userFeedback.style.display = "block";
            // } else {
            //     // If validation succeeds, continue with sending the reply
            //     var userReplyContent = userFeedback.value;
            //     console.log("User Reply content:", userReplyContent);
            //     // Add your code here to send the user reply

            //     // Clear the userFeedback content after sending the reply
            //     userFeedback.value = '';
            // }
    })

    var usersendReplyButton2 = document.getElementById("usersendReplyButton2");
    var errorMessage1 = document.getElementById("error-message1-user");
    var sendReplyButton = document.getElementById("sendReplyButton");
    var errorMessage = document.getElementById("error-message");
    var userFeedback = document.getElementById("userFeedback");
    
    if (usersendReplyButton2) {
        console.log('...userContent... Test', usersendReplyButton2)
        usersendReplyButton2.addEventListener("click", function () {
          //alert("shf");
            var content = quill.getText().trim();

            // Reset error messages
            errorMessage1.style.display = "none";
            userFeedback.style.display = "none";

            if (content === '') {
                console.log('...userContent...', content)
                errorMessage1.style.display = "block";
            } else {
                // If validation succeeds, continue with sending the reply

                
                var replyContent = quill.root.innerHTML;
                console.log("Reply content:", replyContent);
                // Add your code here to send the reply

                // Clear the editor content after sending the reply
                quill.setText('');
            }

            // Additional validation for userFeedback
            var userContent = userFeedback.value.trim();
            if (userContent === '') {
               
                userFeedback.style.display = "block";
            } else {
                // If validation succeeds, continue with sending the reply
                var userReplyContent = userFeedback.value;
                console.log("User Reply content:", userReplyContent);
                // Add your code here to send the user reply

                // Clear the userFeedback content after sending the reply
                userFeedback.value = '';
            }
        });
    }
   


    if (sendReplyButton) {
        console.log('...userContent...dsfdaghd', sendReplyButton)
        sendReplyButton.addEventListener("click", function () {
            var content = quill.getText().trim();

            // Reset error messages
            errorMessage.style.display = "none";
            userFeedback.style.display = "none";

            if (content === '') {
       
                errorMessage.style.display = "block";
            } else {
                // If validation succeeds, continue with sending the reply
                var replyContent = quill.root.innerHTML;
                console.log("Reply content:", replyContent);
                // Add your code here to send the reply

                // Clear the editor content after sending the reply
                quill.setText('');
            }

            // Additional validation for userFeedback
            var userContent = userFeedback.value.trim();
            if (userContent === '') {
                userFeedback.style.display = "block";
            } else {
                // If validation succeeds, continue with sending the reply
                var userReplyContent = userFeedback.value;
                console.log("User Reply content:", userReplyContent);
                // Add your code here to send the user reply

                // Clear the userFeedback content after sending the reply
                userFeedback.value = '';
            }
        });
    }
});



// Function to populate data in the Marriage Beuro modal
function populateMarriageBeuroModal() {
    // Get the data from the original structure for Marriage Beuro modal
    const mbID = document.getElementById('tdmbid004').innerText;
    const mbEmail = document.getElementById('tdmbmail').innerText;
    const subject = document.getElementById('tdsub13').innerText;
    const sentDate = document.getElementById('tddate').innerText;
    const feedbackContent = document.getElementById('tdfdbc').innerText;

    // Set the data into corresponding div elements in the Marriage Beuro modal
    document.getElementById('MB001').innerText = mbID;
    document.getElementById('mb@example.com').innerText = mbEmail;
    document.getElementById('Feedback Subject 1').innerText = subject;
    document.getElementById('2023-11-09').innerText = sentDate;
    // Set other elements accordingly
    document.getElementById('feedback').innerText = feedbackContent;

    // Assuming you have a button that triggers the Marriage Beuro modal display
    document.getElementById('sendReplyButton').addEventListener('click', function () {
        // Code to send the reply feedback, if needed
        // This event listener will be triggered when the "Send Reply" button is clicked in Marriage Beuro modal
    });
}

function populateUserModal() {
    // Get the data from the original structure for User modal
    const userID = document.getElementById('tdUserID').innerText;
    const userEmail = document.getElementById('tdUserEmail').innerText;
    const userFeedback = document.getElementById('tdUserFeedback').innerText;
    const sentDate2 = document.getElementById('tdSentDate').innerText;

    // Set the data into corresponding div elements in the User modal
    document.getElementById('User001').innerText = userID;
    document.getElementById('user@example.com').innerText = userEmail;
    document.getElementById('userFeedback Subject 1').innerText = userFeedback;

    // Set the date into the specific div for Sent Date in the User modal
    document.getElementById('2023-11-10').innerText = sentDate2; // Adjust the ID accordingly

    // Assuming you have a button that triggers the User modal display
    // Add event listener for the button in User modal if needed
}

// Call the function to populate the User modal


populateMarriageBeuroModal();
populateUserModal();



