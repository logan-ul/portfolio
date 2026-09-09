class GalleryImage {
  constructor(name, imagePath, element) {
    this.name = name;
    this.imagePath = imagePath;
    this.element = element;
  }
}

function main(imageCollection, container, detailsButton = null) {
  for (number = 0; number < imageCollection.length; number++) {
    imageCollection[number].element.src = imageCollection[number].imagePath;
    imageCollection[number].element.id = `example-img-${number + 1}`;
    imageCollection[number].element.classList.add("image");
    imageCollection[number].element.classList.add("curved-box");
  }
  update_images(container, imageCollection, detailsButton);
}

function update_images(container, imageCollection, detailsButton = null) {
  container.innerHTML = "";
  for (number = 0; number < imageCollection.length; number++) {
    container.appendChild(imageCollection[number].element);
    if (detailsButton) {
      detailsButton.href = `/examples.html#${imageCollection[number].name}`;
    }
  }
}

function move_image(direction) {
  if (
    imgBox.classList.contains("animated-image-left") ||
    imgBox.classList.contains("animated-image-right")
  ) {
    return;
  }
  if (direction === true) {
    imgBox.classList.add("animated-image-left");
    setTimeout(() => {
      imgBox.classList.remove("animated-image-left");
    }, 1000);
    imageCollection.push(imageCollection.shift());
  } else {
    imgBox.classList.add("animated-image-right");
    setTimeout(() => {
      imgBox.classList.remove("animated-image-right");
    }, 1000);
    imageCollection.unshift(imageCollection.pop());
  }
  update_images();
}

/* 
REQUIRED SECTION OF HTML:

<div class="options">
          <div id="upper-buttons">
            <button
              id="previous-btn"
              onclick="move_image(false)"
              class="button"
            >
              Previous
            </button>
            <button id="next-btn" onclick="move_image(true)" class="button">
              Next
            </button>
          </div>
        </div>
*/
