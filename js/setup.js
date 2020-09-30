'use strict';

const WIZARDS = [];

const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const names = [`Иван`, `Хуан`, `Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const surnames = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];

const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getWizard = () => {
  for (let i = 0; i < 4; i++) {
    WIZARDS.push(
        {
          name: `${names[getRandomInt(0, names.length - 1)]} ${surnames[getRandomInt(0, surnames.length - 1)]}`,
          coatColor: `${coatColors[getRandomInt(0, coatColors.length - 1)]}`,
          eyesColor: `${eyesColors[getRandomInt(0, eyesColors.length - 1)]}`,
        }
    );
  }
};

const renderWizard = () => {
  getWizard();
  for (let i = 0; i < WIZARDS.length; i++) {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    similarListElement.appendChild(wizardElement);

    wizardElement.querySelector(`.setup-similar-label`).textContent = WIZARDS[i].name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = WIZARDS[i].coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = WIZARDS[i].eyesColor;
  }
};

renderWizard();
