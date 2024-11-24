$(document).ready(() => {
  // Get all the image links
  const imageLinks = document.querySelectorAll(".image-link");

  // Get the modal elements
  const popup = document.getElementById("image-popup");
  const popupImage = document.getElementById("popup-image");
  const closePopupElement = document.querySelector(".popup-close");

  // Add click event listeners to each image link
  imageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior

      const imageSrc = link.getAttribute("data-image"); // Get image URL from data attribute
      popupImage.src = imageSrc; // Set the popup image source
      popup.style.display = "flex"; // Show the popup modal
    });
  });

  // Add event listener to close button
  if (closePopupElement) {
    closePopupElement.addEventListener("click", () => {
      closePopup();
    });
  }

  // Close the popup when clicking outside the image
  if (popup) {
    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        closePopup();
      }
    });
  }

  $(document).keydown(e => {
    if (e.keyCode === 27) { // esc
      closePopup();
  } });

  function closePopup() {
    if (popup) {
      popup.style.display = "none";
      popupImage.src = "";
    }
  }
});

