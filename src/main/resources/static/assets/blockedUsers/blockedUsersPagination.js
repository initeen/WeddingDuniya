$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageLinks = document.querySelectorAll('.page-link');
    const pageNumberDisplay = document.getElementById('page-numbers');
  
    let currentPage = 1; // Initially, assuming the first page is active
    const totalPages = pageLinks.length; // Assuming the total number of pages equals the number of page links
  
    function showPage(current) {
      pageLinks.forEach(link => {
        const pageNumber = parseInt(link.getAttribute('data-page'));
        if (pageNumber === current) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  
    function updatePagination() {
      showPage(currentPage);
      pageNumberDisplay.textContent = `Page ${currentPage} of ${totalPages}`;
  
      if (currentPage === 1) {
        prevButton.classList.add('active');
        prevButton.classList.add('disabled');
        nextButton.classList.remove('active', 'disabled');
      } else if (currentPage === totalPages) {
        prevButton.classList.remove('active', 'disabled');
        nextButton.classList.add('active');
        nextButton.classList.add('disabled');
      } else {
        prevButton.classList.remove('active', 'disabled');
        nextButton.classList.remove('active', 'disabled');
      }
    }
  
    updatePagination();
  
    nextButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });
  
    prevButton.addEventListener('click', function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });
  
    pageLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const pageNumber = parseInt(link.getAttribute('data-page'));
        currentPage = pageNumber;
        updatePagination();
      });
    });
  });
  