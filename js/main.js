import {getRandomNumber,  getPhotoUrl, getDescription, getMessage, getName, 
  getAvatarUrl, getCommentsId, getComments, getPhoto } from "./util.js";

const arrayPhoto = new Array(25).fill(null).map((n, index) => getPhoto(index + 1));
console.log(arrayPhoto);

export {arrayPhoto};
