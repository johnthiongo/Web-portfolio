// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class 'progress'
  const progressBars = document.querySelectorAll(".progress");

  // Function to animate the progress bar width from 0% to its original width
  function animateProgressBar(bar) {
    const width = bar.style.width; // Get the current width of the progress bar
    bar.style.width = "0%"; // Set the width to 0% for animation
    requestAnimationFrame(() => {
      bar.style.width = width; // Animate the width back to its original value
    });
  }

  // Create an IntersectionObserver to trigger the progress bar animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the progress bar is in the viewport, animate it
          animateProgressBar(entry.target);
          // Stop observing the element after it's animated
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 } // Trigger when at least 10% of the element is visible
  );

  // Observe each progress bar
  progressBars.forEach((bar) => {
    try {
      observer.observe(bar); // Observe the progress bar
    } catch (error) {
      console.error("Error observing progress bar:", error); // Log any errors that occur
    }
  });
});

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the contact form
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    // Add an event listener for form submission
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission

      const formData = new FormData(this); // Collect form data
      console.log("Form submitted with the following data:");
      for (let [key, value] of formData.entries()) {
        console.log(key + ": " + value); // Log each form field and its value
      }

      // Clear the form after submission
      this.reset();

      // Show a success message to the user
      alert("Thank you for your message. We will get back to you soon!");
    });
  }
});

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", (event) => {
  // Select all elements with the class 'dropdown'
  const dropdowns = document.querySelectorAll(".dropdown");

  // Add a click event listener to each dropdown
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent click event from bubbling up to the document
      // Toggle the 'show' class on the dropdown content
      dropdown.querySelector(".dropdown-content").classList.toggle("show");
    });
  });

  // Add a click event listener to the document to close dropdowns
  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      // Close dropdowns if click is outside of them
      if (!dropdown.contains(e.target)) {
        dropdown.querySelector(".dropdown-content").classList.remove("show");
      }
    });
  });
});

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", (event) => {
  // Select the testimonial slider and its components
  const slider = document.querySelector(".testimonial-slider");
  const cards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0; // Index of the currently visible testimonial

  // Function to show a specific testimonial card based on index
  function showTestimonial(index) {
    cards.forEach((card, i) => {
      card.style.display = i === index ? "block" : "none"; // Show the card at the current index
    });
  }

  // Function to show the next testimonial card
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % cards.length; // Increment index and loop back to start
    showTestimonial(currentIndex);
  }

  // Function to show the previous testimonial card
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Decrement index and loop to end
    showTestimonial(currentIndex);
  }

  // Add click event listeners to navigation buttons
  nextBtn.addEventListener("click", nextTestimonial);
  prevBtn.addEventListener("click", prevTestimonial);

  // Show the first testimonial card initially
  showTestimonial(currentIndex);

  // Optional: Auto-rotate testimonials every 5 seconds
  setInterval(nextTestimonial, 5000);
});
