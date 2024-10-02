  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });



//   ANIMATE TEXT START

document.addEventListener("DOMContentLoaded", function () {
    const slogans = ["Innovation", "Quality", "Excellence", "Integrity", "Creativity"];
    let index = 0;
    const sloganElement = document.getElementById("slogan");

    function updateSlogan() {
        // Start fade-out
        sloganElement.classList.remove('fade-in');
        sloganElement.classList.add('fade-out');
        
        // Change the text after the fade-out completes (synchronized with transition time)
        setTimeout(() => {
            index = (index + 1) % slogans.length;  // Cycle through slogans
            sloganElement.textContent = slogans[index];

            // Start fade-in
            sloganElement.classList.remove('fade-out');
            sloganElement.classList.add('fade-in');
        }, 800);  // Matches transition duration
    }

    // Initialize the first fade-in
    sloganElement.classList.add('fade', 'fade-in');
    setInterval(updateSlogan, 3000);  // Change word every 3 seconds
});

//   ANIMATE TEXT END




 // JavaScript for Slider Functionality
 const imagesPerPage = 6; // Number of images to show per page
    let currentPage = 0; // Current page index
    const slider = document.getElementById('slider');
    const totalImages = slider.children.length; // Total number of images
    const totalPages = Math.ceil(totalImages / imagesPerPage); // Calculate total pages

    // Function to update the slider based on the current page
    function updateSlider() {
        const offset = currentPage * imagesPerPage;
        const maxOffset = totalImages - imagesPerPage;

        // Ensure the current page stays within bounds
        currentPage = Math.max(0, Math.min(currentPage, Math.floor(totalPages - 1)));

        // Calculate the translateX value for the slider
        const translateX = -offset * (100 / imagesPerPage); // Adjust for the width of images

        // Update the slider's transform style
        slider.style.transform = `translateX(${translateX}%)`;
    }

    // Event listeners for buttons
    document.getElementById('prev').addEventListener('click', () => {
        currentPage--;
        if (currentPage < 0) currentPage = 0; // Prevent going to negative page
        updateSlider();
    });

    document.getElementById('next').addEventListener('click', () => {
        currentPage++;
        if (currentPage >= totalPages) currentPage = totalPages - 1; // Prevent going out of bounds
        updateSlider();
    });

    // Initialize the slider
    updateSlider();