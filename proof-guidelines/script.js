// script.js

// Get all the image links
const imageLinks = document.querySelectorAll('.image-link');

// Get the modal elements
const popup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closePopup = document.querySelector('.popup-close');

// Add click event listeners to each image link
imageLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    const imageSrc = link.getAttribute('data-image'); // Get image URL from data attribute
    popupImage.src = imageSrc; // Set the popup image source
    popup.style.display = 'flex'; // Show the popup modal
  });
});

// Add event listener to close button
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide the popup
  popupImage.src = ''; // Clear the image source
});

// Close the popup when clicking outside the image
popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none'; // Hide the popup
    popupImage.src = ''; // Clear the image source
  }
});