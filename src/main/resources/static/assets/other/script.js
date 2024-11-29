let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}


// Get the current page URL
const currentPage = window.location.href;

// Find the sidebar links and loop through them
const sidebarLinks = document.querySelectorAll('.nav-links a');
//console.log("sidebar",sidebarLinks);
sidebarLinks.forEach(link => {
  // Check if the link href matches the current page URL
  if (link.href === currentPage) {
    // Add 'active' class to the parent 'li' element
    link.parentNode.classList.add('active');
  }
});