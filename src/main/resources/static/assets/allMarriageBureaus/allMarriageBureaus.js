flatpickr(".datepicker",
      {});


      const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      });


      $(document).ready(function () {
        // Function to handle real-time search
        $("#search").on("input", function () {
          var searchTerm = $(this).val().toLowerCase();
          filterTable(searchTerm);
        });

        // Function to handle location filter
        $("select[name='choices-single-defaul']").change(function () {
          var selectedLocation = $(this).val().toLowerCase();
          filterTable(selectedLocation);
        });

        // Function to filter the table based on search term or location
        function filterTable(filter) {
          var rows = $("tbody tr");
          var noDataFoundMessage = $("#no-data-found");

          rows.hide();

          var filteredRows = rows.filter(function () {
            return (
              $(this).text().toLowerCase().indexOf(filter) > -1 ||
              $("td:nth-child(4)", this).text().toLowerCase().indexOf(filter) > -1
            );
          });

          filteredRows.show();

          // Show or hide the no data found message
          if (filteredRows.length === 0) {
            noDataFoundMessage.show();
          } else {
            noDataFoundMessage.hide();
          }
        }

        // Function to handle search button click (optional)
        $(".btn-search").click(function () {
          var searchTerm = $("#search").val().toLowerCase();
          filterTable(searchTerm);
        });
      });