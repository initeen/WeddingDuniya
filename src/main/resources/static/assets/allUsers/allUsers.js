flatpickr(".datepicker",
      {});


      const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      });


      $(document).ready(function () {
        // Real-time search
        $('#search, [name="choices-single-defaul"]').on('input change', function () {
            var searchTerm = $('#search').val().toLowerCase();
            var location = $('[name="choices-single-defaul"]').val().toLowerCase();

            filterTable(searchTerm, location);
        });

        // Function to filter the table based on search term or location
        function filterTable(searchTerm, location) {
            var tableRows = $('.table tbody tr');
            var noDataMessageRow = $('#no-data-message-row');

            tableRows.hide();

            var filteredRows = tableRows.filter(function () {
                var userName = $(this).find('td:nth-child(2)').text().toLowerCase();
                var status = $(this).find('td:nth-child(3)').text().toLowerCase();
                var rowLocation = $(this).find('td:nth-child(4)').text().toLowerCase();

                return userName.indexOf(searchTerm) > -1 || status.indexOf(searchTerm) > -1 || rowLocation.indexOf(location) > -1;
            });

            if (filteredRows.length === 0) {
                // Show the "Data not found" message row
                noDataMessageRow.show();
            } else {
                // Hide the "Data not found" message row
                noDataMessageRow.hide();
                // Show the filtered rows
                filteredRows.show();
            }
        }
    });