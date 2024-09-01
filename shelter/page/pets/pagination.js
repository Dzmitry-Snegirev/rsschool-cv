'use strict'


let cardsData = [
  {
    id: 1,
    cardAttributeName: 'jennifer',
    petName: 'Jennifer',
    petImgAddress: '../../assets/img/pets-jennifer.png',
  },
  {
    id: 2,
    cardAttributeName: 'sophia',
    petName: 'Sophia',
    petImgAddress: '../../assets/img/pets-puppy.png',
  },
  {
    id: 3,
    cardAttributeName: 'woody',
    petName: 'Woody',
    petImgAddress: '../../assets/img/pets-woody.png',
  },
  {
    id: 4,
    cardAttributeName: 'scarlett',
    petName: 'Scarlett',
    petImgAddress: '../../assets/img/pets-scarlet.png',
  },
  {
    id: 5,
    cardAttributeName: 'katrine',
    petName: 'Katrine',
    petImgAddress: '../../assets/img/pets-katrine.png',
  },
  {
    id: 6,
    cardAttributeName: 'timmy',
    petName: 'Timmy',
    petImgAddress: '../../assets/img/pets-timmy.png',
  },
  {
    id: 7,
    cardAttributeName: 'freddie',
    petName: 'Freddie',
    petImgAddress: '../../assets/img/pets-kat.png',
  },
  {
    id: 8,
    cardAttributeName: 'charly',
    petName: 'Charly',
    petImgAddress: '../../assets/img/pets-charly.png',
  },
];

const firstPageBtn = document.getElementById('firstPage');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const lastPageBtn = document.getElementById('lastPage');
const activePaginationBtn = document.getElementById('activePage');
const main__node = document.querySelector(".wrap__slider");
const countElements = 8;
const endPage = 6;
const startPage = 1;
let currentPage = 1;

/* create arr random index*/
function startElArr() {
  let arr = []
  while (arr.length < 8) {
    const randNum = Math.floor(1 + Math.random() * cardsData.length);
    if (!arr.includes(randNum)) {
      arr.push(randNum);
    }
  }
  return arr;
}
/*init comon arr 48 elements*/
function randomArr() {
  let arr2 = [];
  while (arr2.length < 6) {
    arr2.push(startElArr());
  }
  let res = [].concat(...arr2);
  return res.map((el) => cardsData[el - 1]);
}
let startArr = randomArr();
console.log(startArr);

/* generate date-list*/
function displayList(arrData, rowPerPage, page) {
  page--;
  let start = rowPerPage * page;
  let end = start + rowPerPage;
  let paginatedData = arrData.slice(start, end);
  const modal = document.createElement('div');
  modal.classList.add('slider-container');
  paginatedData.forEach((el) => {
    modal.insertAdjacentHTML('afterBegin',
      `<div class="slider-item">
          <img src=${el.petImgAddress} alt=${el.petName}>
          <h3 class="slider-title">${el.petName}</h3>
          <button class="slider-button">Learn more</button>
        </div>`);
  });
  main__node.append(modal);
  console.log(modal);
}


function closeModal() {
  main__node.removeChild(document.querySelector('.slider-container'));
}

function generateContent() {
  closeModal();
  activePaginationBtn.textContent = currentPage;
  displayList(startArr, countElements, currentPage);
}

function nextPage() {
  if (currentPage < 6) {
    currentPage++;
  }
  if (currentPage === endPage) {
    nextPageBtn.classList.add("no-active");
    lastPageBtn.classList.add("no-active");
  }
  generateContent();
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
  };
  /* nextPageBtn.classList.remove("no-active");*/
  /* lastPageBtn.classList.remove("no-active");*/

  generateContent();
}

function lastPage() {
  currentPage = endPage;
  lastPageBtn.classList.add("no-active");
  nextPageBtn.classList.add("no-active");
  generateContent();
}
function firstPage() {
  currentPage = startPage;
  generateContent();
}


nextPageBtn.addEventListener('click', () => {
  nextPage();
});

prevPageBtn.addEventListener('click', () => {
  prevPage();
});

lastPageBtn.addEventListener('click', () => {
  lastPage();
});

firstPageBtn.addEventListener('click', () => {
  firstPage();
});

displayList(startArr, countElements, currentPage);