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
      detailsButton.href = `/${imageCollection[1].name}.html`;
    }
  }
}

function move_image(
  direction,
  container,
  imageCollection,
  detailsButton = null,
) {
  if (
    container.classList.contains("animated-image-left") ||
    container.classList.contains("animated-image-right")
  ) {
    return;
  }
  if (direction === true) {
    container.classList.add("animated-image-left");
    setTimeout(() => {
      container.classList.remove("animated-image-left");
    }, 1000);
    imageCollection.push(imageCollection.shift());
  } else {
    container.classList.add("animated-image-right");
    setTimeout(() => {
      container.classList.remove("animated-image-right");
    }, 1000);
    imageCollection.unshift(imageCollection.pop());
  }
  update_images(container, imageCollection, detailsButton);
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

/*
JS USECASE

<script src="gallery.js"></script>
    <script defer>
      let image1 = new GalleryImage(
        "duck-system",
        "static/Duck-System-Example.png",
        document.createElement("img"),
      );
      const buttons = document.querySelectorAll(".move-button");
      const imageCollection = [image1];
      const container = document.querySelector(".img-box");
      <OPTIONAL> const detailsButton = document.querySelector("#details-btn");

      buttons.forEach((button) => {
        if (button.id === "previous-btn") {
          button.addEventListener("click", () => {
            move_image(false, container, imageCollection, detailsButton);
          });
        } else if (button.id === "next-btn") {
          button.addEventListener("click", () => {
            move_image(true, container, imageCollection, detailsButton);
          });
        }
      });

      main(imageCollection, container, detailsButton);
    </script>
*/
