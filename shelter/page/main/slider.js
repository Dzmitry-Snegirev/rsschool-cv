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


const left__block = document.getElementById(".left-block");
const active__block = document.getElementById(".active-block");
const right__block = document.getElementById(".rigth-block");
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-rigth');

function generateItem(el) {

  for (let i of cardsData) {
    el.insertAdjacentHTML('afterBegin',
      `<div class="slider-item">
          <img src=${i.petImgAddress} alt=${i.petName}>
          <h3 class="slider-title">${i.petName}</h3>
          <button class="slider-button">Learn more</button>
        </div>`);
  }
};

function randomItems() {
  let del = [];
  const randNum = Math.floor(1 + Math.random() * cardsData.length);
  const arr = [];
  while (arr.length < 3) {
    if (!arr.includes(randNum) && del.find((el) => el.id === randNum) === undefined) {
      arr.push(randNum);
    }
  }
  return arr.map((el) => cardsData[el - 1]);
}

/*пример

function showHeroes(jsonObj) {
  var section = document.querySelector("section");
  var heroes = jsonObj["members"];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";

    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}*/



