function getRandomNumber() {
  let RandomNumberMax = 25,
    RandomNumberMin = 5;
  return Math.floor(
    Math.random() * (RandomNumberMax - RandomNumberMin + 1) + RandomNumberMin,
  );
}

function getPhotoUrl(id) {
  return `photos/${id}.jpg`;
}

function getDescription() {
  const arrDescription = [
    "Таємнича технологія у футуристичному стилі",
    "Атмосферна сцена з елементами наукової фантастики",
    "Масивна механічна конструкція в незвичному середовищі",
    "Фантазійний технічний об’єкт із виразними деталями",
    "Похмура індустріальна естетика з sci-fi настроєм",
    "Незвичайний механізм у кінематографічному освітленні",
    "Стилізоване зображення техніки майбутнього",
    "Деталізована сцена з механічними та фантастичними елементами",
    "Вражаючий образ у світі технологій та уяви",
    "Футуристичний сюжет із напруженою атмосферою",
  ];
  const randomIndexDescription = Math.floor(
    Math.random() * arrDescription.length,
  );
  return arrDescription[randomIndexDescription];
}

function getMessage() {
  const arrMessage = [
    "Все відмінно!",
    "Загалом все непогано. Але не всі.",
    "Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",
    "Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
    "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
    "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?",
  ];
  const randomIndexMessage = Math.floor(Math.random() * arrMessage.length);
  return arrMessage[randomIndexMessage];
}
function getName() {
  const arrName = [
    "Артем",
    "Данило",
    "Олег",
    "Саньок",
    "Вікуся",
    "Оленка",
    "Ігорь",
  ];
  const randomIndexName = Math.floor(Math.random() * arrName.length);
  return arrName[randomIndexName];
}
function getAvatarUrl() {
  let RandomNumberMax = 6,
    RandomNumberMin = 1;
  return `img/avatar-${Math.floor(Math.random() * (RandomNumberMax - RandomNumberMin + 1) + RandomNumberMin)}.svg`;
}
function getCommentsId() {
  let RandomNumberMax = 1000,
    RandomNumberMin = 2;
  return Math.floor(
    Math.random() * (RandomNumberMax - RandomNumberMin + 1) + RandomNumberMin,
  );
}
function getComments() {
  const count = Math.floor(Math.random() * 3) + 1;

  return Array.from({ length: count }, () => ({
    idComm: getCommentsId(),
    avatar: getAvatarUrl(),
    message: getMessage(),
    name: getName(),
  }));
}

function getPhoto(n) {
  return {
    id: n,
    url: getPhotoUrl(n),
    description: getDescription(),
    likes: getRandomNumber(),
    comment: getComments(),
  };
}

const array = new Array(25).fill(null).map((n, index) => getPhoto(index + 1));
console.log(array);
