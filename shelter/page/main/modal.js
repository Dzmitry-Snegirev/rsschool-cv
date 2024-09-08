'use strict'

const data = {
  item1: {
    id: 1,
    name: "Jennifer",
    img: "../../assets/img/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
  },
  item2: {
    id: 2,
    name: "Sophia",
    img: "../../assets/img/pets-puppy.png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"]
  },
  item3: {
    id: 3,
    name: "Woody",
    img: "../../assets/img/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
  },
  item4: {
    id: 4,
    name: "Scarlett",
    img: "../../assets/img/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"]
  },
  item5: {
    id: 5,
    name: "Katrine",
    img: "../../assets/img/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"]
  },
  item6: {
    id: 6,
    name: "Timmy",
    img: "../../assets/img/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"]
  },
  item7: {
    id: 7,
    name: "Freddie",
    img: "../../assets/img/pets-kat.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"]
  },
  item8: {
    id: 8,
    name: "Charly",
    img: "../../assets/img/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"]
  }
}



const overlayModal = document.querySelector('.overlay');
const slideItems = document.querySelector('.slide-blocks');
const idItem = 'id';
const show = document.querySelector('.showModal');


function createModal(elem) {
  show.innerHTML = '';
  show.innerHTML = `
    <img
    src="${elem.img}"
    alt="photo"
    class="modal__img"
    >
    <div class="modal__content">
      <div class="wrap__title">
        <h3 class="modal__title">${elem.name}</h3>
        <h4 class="modal__subtitle">${elem.type} - ${elem.breed}</h4>
      </div>
      <h5 class="modal__text">${elem.description}</h5>
      <ul class="modal__list">
        <li class="modal__item">Age: <span>${elem.age}</span></li>
        <li class="modal__item">Inoculations: <span>${elem.inoculations.join(', ')}</span></li>
        <li class="modal__item">Diseases: <span>${elem.diseases.join(', ')}</span></li>
        <li class="modal__item">Parasites: <span>${elem.parasites.join(', ')}</span></li>
      </ul>
    </div>
  `;

  const btnClose = document.createElement('div');
  btnClose.className = 'btnClose';
  btnClose.innerHTML = '<img src="../../assets/img/close-btn.png" alt="close">';
  btnClose.addEventListener('click', closeModal);
  show.appendChild(btnClose);
}


function openModal(it) {
  createModal(data[it]);
}

function closeModal() {
  overlayModal.classList.remove('overlay-active');
  show.classList.remove('show-open');
  document.body.classList.remove("stop-scrolling");
}

function showModal(e) {
  const clickItem = e.target.closest('.slider-item');
  const cardId = clickItem.getAttribute(idItem);
  openModal(cardId);
  overlayModal.classList.add('overlay-active');
  document.body.classList.add("stop-scrolling");
  show.classList.add('show-open');
}

overlayModal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  closeModal();
});
slideItems.addEventListener('click', showModal);