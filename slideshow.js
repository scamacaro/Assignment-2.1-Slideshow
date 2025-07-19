// Image file paths stored in individual variables
let image1 = "images/mountain1.jpg";
let image2 = "images/mountain2.jpg";
let image3 = "images/mountain3.jpg";
let image4 = "images/mountain4.jpg";
let image5 = "images/mountain5.jpg";
let image6 = "images/mountain6.jpg";

// Array of image objects with src, caption, and alt text
let arrImages = [
  {
    src: image1,
    caption: "Mountain 1 - Colorado, USA By Joe Dudeck",
    alt: "Highway with a rocky mountain view at the end"
  },
  {
    src: image2,
    caption: "Mountain 2 - Colorado, USA By Demian Tejeda-Benitez",
    alt: "Green forest with rocky mountain view"
  },
  {
    src: image3,
    caption: "Mountain 3 - Mount Assiniboine Provincial Park, Canada By Alex Gorey",
    alt: "Sharp mountain peak reflecting in calm lake, Canada"
  },
  {
    src: image4,
    caption: "Mountain 4 - Rocky Mountains By James Lee",
    alt: "Panoramic view of the Rocky Mountains with forest"
  },
  {
    src: image5,
    caption: "Mountain 5 - Rocky Mountain National Park, USA By Harold Wainwright",
    alt: "Rocky Mountain National Park with green and golden valley and peaks"
  },
  {
    src: image6,
    caption: "Mountain 6 - Moraine Lake Rd, Canada By Rafa Prada",
    alt: "Scenic Moraine Lake road surrounded by tall peaks and huge rocky mountain"
  }
];

// Track the current image index
let currentIndex = 0;

// Get image and caption elements from the HTML
let imgElement = document.getElementById("imgSlide");
let captionElement = document.getElementById("caption");

// Display the current image, its caption, and alt text
function showSlide(index) {
  imgElement.src = arrImages[index].src; // image source
  imgElement.alt = arrImages[index].alt; // alt text for accessibility
  captionElement.textContent = arrImages[index].caption; // caption
}

// Move to the next image in the array
function nextSlide() {
  currentIndex = (currentIndex + 1) % arrImages.length;
  showSlide(currentIndex);
}

// Move to the previous image in the array
function prevSlide() {
  currentIndex = (currentIndex - 1 + arrImages.length) % arrImages.length;
  showSlide(currentIndex);
}

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);

// Show the first image and caption when the page loads
showSlide(currentIndex);
