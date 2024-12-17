function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  // Toggle the menu visibility
  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Add a class to the body to prevent scrolling when the menu is open
  document.body.classList.toggle("menu-open");
}

function toggleEmail() {
  const emailElement = document.getElementById("email");
  if (emailElement.style.display === "none") {
    emailElement.style.display = "block"; // Show email
  } else {
    emailElement.style.display = "none"; // Hide email
  }
}

// JavaScript to animate text in a loop
document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.loop-animation');

    animatedElements.forEach((el) => {
        el.classList.add('loop-animation'); // Add class to trigger looping animation
    });
});
