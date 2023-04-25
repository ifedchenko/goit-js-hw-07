import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItem = galleryItems.map(
  ({ preview, original, description }) => {
    return `<li class ="gallery__item"><a class="gallery__link" href="${original}"> <img class ="gallery__image" src="${preview}" data-source="${original}" alt="${description}" width="340"/></a></li>`;
  }
);
galleryList.insertAdjacentHTML("beforeend", galleryItem.join(""));

galleryList.addEventListener("click", onClickOpenImg);

function onClickOpenImg(event) {
  event.preventDefault();

  // console.log(linkSrc);
  //   console.log(event.target.getAttribute("alt"));
  const linkSrc = event.target.parentElement.getAttribute("href");
  const altSrc = event.target.getAttribute("alt");

  const instance = basicLightbox.create(`
		<img width="1280" src="${linkSrc}" alt="${altSrc}" >
	`);

  instance.show();

  function escKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", escKeyDown);
    }
  }

  function removeListeners() {
    instance.element().removeEventListener("click", removeListeners);
    window.removeEventListener("keydown", escKeyDown);
  }
  //   console.log(instance);
  //   console.log(instance.element());

  window.addEventListener("keydown", escKeyDown);

  instance.element().addEventListener("click", removeListeners);
}
