const loaderContainer = document.getElementById("hloop-logo");

const imageURL1 = 'https://uploads-ssl.webflow.com/65a69e1293ddf1cff77af657/65b33e29cc698c95cc2aecb7_icon-1.svg'; // Replace 'url_to_image_1.jpg' with the actual URL for your image
const imageURL2 = 'https://uploads-ssl.webflow.com/65a69e1293ddf1cff77af657/65b33e2941619d03221cb4c0_icon-2.svg'; // Replace 'url_to_image_2.jpg' with the actual URL for your image
const imageURL3 = 'https://uploads-ssl.webflow.com/65a69e1293ddf1cff77af657/65b33e2980f3cfb83d0ef555_icon-3.svg'; // Replace 'url_to_image_3.jpg' with the actual URL for your image

const imageUrls = [imageURL1, imageURL2, imageURL3];
let currentImageUrlIndex = 0;
let interval;
let totalImagesShown = 0; // Counter to track the total number of images shown

const displayImage = () => {
  const img = new Image();
  img.src = imageUrls[currentImageUrlIndex];
  loaderContainer.innerHTML = ''; // Clear existing content
  loaderContainer.appendChild(img);
  totalImagesShown++; // Increment total images shown
  currentImageUrlIndex = (currentImageUrlIndex + 1) % imageUrls.length;

  // Check if we have shown 7 images (your specific sequence)
  if (totalImagesShown === 7) {
    clearInterval(interval);
    setTimeout(() => {
      totalImagesShown = 0; // Reset total images shown
      currentImageUrlIndex = 0; // Reset to start with the first image for the new cycle
      initiateImageAnimation(); // Restart the animation
    }, 1000); // Wait for 1 sec before restarting the animation
  }
};

const initiateImageAnimation = () => {
  // Reset currentImageUrlIndex to 0 to ensure starting from the first image
  currentImageUrlIndex = 0;
  displayImage(); // Show the first image immediately
  interval = setInterval(displayImage, 500); // Change image every 250ms
};

initiateImageAnimation(); // Start the animation
