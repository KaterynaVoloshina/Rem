import { arrayPhoto } from "./main.js";

const template = document.querySelector('#picture').content;
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

arrayPhoto.forEach((photo) => {
  const cloneTemplate = template.cloneNode(true);

  const img = cloneTemplate.querySelector('.picture__img');
  const likes = cloneTemplate.querySelector('.picture__likes');
  const comments = cloneTemplate.querySelector('.picture__comments');

  img.src = photo.url;
  likes.textContent = photo.likes;
  comments.textContent = photo.comment.length;

  fragment.appendChild(cloneTemplate);
});

container.appendChild(fragment);