
    function confirmDelete() {
        $('#deleteModal').modal('show');
    }

    function deletePolicy() {
        // Add your logic to delete the policy here
        // For example, you can make an AJAX request to the server

        // Close the modal after deletion
        $('#deleteModal').modal('hide');
    }



function uploadPdf() {
    var fileInput = document.getElementById('pdfInput');
    var file = fileInput.files[0];

    if (file) {
        // Check if the file size is less than 5MB (5 * 1024 * 1024 bytes)
        if (file.size > 5 * 1024 * 1024) {
            window.alert('Please select a PDF file that is less than 5MB.');
            return;
        }

        var formData = new FormData();
        formData.append('pdfFile', file);

        // Replace the URL below with your server-side endpoint for handling file uploads
        fetch('YOUR_SERVER_UPLOAD_ENDPOINT', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('File uploaded:', data);
            window.alert('PDF uploaded successfully!');
            displayPDFs();
        })
        .catch(error => {
            console.error('Error uploading file:', error);
        });
    } else {
        window.alert('Please select a PDF file.');
    }
}

function uploadPdf() {
    var fileInput = document.getElementById('pdfInput');
    var file = fileInput.files[0];

    if (file) {
        // Confirm with the user before uploading
        var isConfirmed = confirm('Are you sure you want to upload this PDF?');
        
        if (isConfirmed) {
            // Check if the file size is less than 5MB (5 * 1024 * 1024 bytes)
            if (file.size > 5 * 1024 * 1024) {
                window.alert('Please select a PDF file that is less than 5MB.');
                return;
            }

            var formData = new FormData();
            formData.append('pdfFile', file);

            // Replace the URL below with your server-side endpoint for handling file uploads
            fetch('YOUR_SERVER_UPLOAD_ENDPOINT', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('File uploaded:', data);
                window.alert('PDF uploaded successfully!');
                displayPDFs();
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
        }
    } else {
        window.alert('Please select a PDF file.');
    }
}
