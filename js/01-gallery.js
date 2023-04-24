import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({preview, original, description}) => {
    return `<li class ="gallery__item"><a href="${original}" class="gallery__link " > <img class ="gallery__image" src="${preview}" alt="${description}" width="340"/></a></li>`
})
galleryList.insertAdjacentHTML('beforeend', galleryItem.join(''))



