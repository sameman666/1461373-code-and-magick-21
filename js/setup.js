'use strict';

const WIZARDS_AMOUNT = 4;
const NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const similarList = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const fragment = document.createDocumentFragment();
const userDialog = document.querySelector(`.setup`);

const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomData = (data) => {
  return data[getRandomInt(0, data.length - 1)];
};

const getWizard = (count) => {
  const wizards = [];
  for (let i = 0; i < count; i++) {
    wizards.push(
        {
          name: `${getRandomData(NAMES)} ${getRandomData(SURNAMES)}`,
          coatColor: `${getRandomData(COAT_COLORS)}`,
          eyesColor: `${getRandomData(EYES_COLORS)}`,
        }
    );
  }
  return wizards;
};

const renderWizard = (data) => {
  for (let i = 0; i < data.length; i++) {
    const wizard = similarWizardTemplate.cloneNode(true);

    wizard.querySelector(`.setup-similar-label`).textContent = data[i].name;
    wizard.querySelector(`.wizard-coat`).style.fill = data[i].coatColor;
    wizard.querySelector(`.wizard-eyes`).style.fill = data[i].eyesColor;

    fragment.appendChild(wizard);
  }

  similarList.appendChild(fragment);
};

renderWizard(getWizard(WIZARDS_AMOUNT));

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const setupOpen = document.querySelector(`.setup-open`);
const setupClose = userDialog.querySelector(`.setup-close`);
const setUserName = document.querySelector(`.setup-user-name`);
const coat = document.querySelector(`.setup-wizard .wizard-coat`);
const eyes = document.querySelector(`.setup-wizard .wizard-eyes`);
const fireball = document.querySelector(`.setup-fireball-wrap`);
const fireBallInput = document.querySelector(`[name="fireball-color"]`);
const coatInput = document.querySelector(`[name="coat-color"]`);
const eyesInput = document.querySelector(`[name="eyes-color"]`);

const openPopup = () => {
  userDialog.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, () => {
  openPopup();
});

const closePopup = () => {
  userDialog.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupClose.addEventListener(`click`, () => {
  closePopup();
});

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape`) {
    if (evt.target === setUserName) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      closePopup();
    }
  }
};

setupOpen.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

const changeCoatColor = () => {
  coat.style.fill = coatInput.value = COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)];
};

coat.addEventListener(`click`, () => {
  changeCoatColor();
});

const changeEyesColor = () => {
  eyes.style.fill = eyesInput.value = EYES_COLORS[getRandomInt(0, EYES_COLORS.length - 1)];
};

eyes.addEventListener(`click`, () => {
  changeEyesColor();
});

const changeFireballColor = () => {
  fireball.style.backgroundColor = fireBallInput.value = `${FIREBALL_COLORS[getRandomInt(0, FIREBALL_COLORS.length - 1)]}`;
};

fireball.addEventListener(`click`, () => {
  changeFireballColor();
});
