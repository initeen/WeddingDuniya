document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("paymentTable");
    const paymentBySelect = document.getElementById("paymentByFilter");
    const rows = table.querySelector("tbody").getElementsByTagName("tr");

    // Add event listener to the payment by filter
    paymentBySelect.addEventListener("change", filterTable);

    function filterTable() {
        const paymentByFilter = paymentBySelect.value.toLowerCase();

        for (let i = 0; i < rows.length; i++) {
            const paymentBy = rows[i].getElementsByTagName("td")[2].textContent.toLowerCase();

            const isVisible = paymentByFilter === "" || paymentBy.includes(paymentByFilter);
            rows[i].style.display = isVisible ? "" : "none";
        }
    }
});

function applyStyles(selectElement) {
    // Remove any existing 'select-clicked' class from all options
    const options = selectElement.getElementsByTagName('option');
    for (const option of options) {
        option.classList.remove('select-clicked');
    }

    // Add the 'select-clicked' class to the selected option
    const selectedOption = options[selectElement.selectedIndex];
    selectedOption.classList.add('select-clicked');

    // Add the 'select-clicked' class to the select element itself
    selectElement.classList.add('select-clicked');
}

// JavaScript function to handle the print functionality
function printPaymentHistory() {
    window.print();
  }