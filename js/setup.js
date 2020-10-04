'use strict';

const WIZARDS_AMOUNT = 4;
const NAMES = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
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

userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);
