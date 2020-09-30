'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const TITLE_X = 20;
const TITLE_Y = 30;
const TEXT_HEIGHT = 20;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const COLUMN_GAP = 50;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (elements) => {
  let maxElement = elements[0];

  for (let i = 1; i < elements.length; i++) {
    if (elements[i] > maxElement) {
      maxElement = elements[i];
    }
  }

  return maxElement;
};

const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + TITLE_X, CLOUD_Y + TITLE_Y);
  ctx.fillText(`Список результатов:`, CLOUD_X + TITLE_X, CLOUD_Y + TITLE_Y * 1.5);

  const maxTime = getMaxElement(times);

  const getRandomBlue = () => {
    return `hsl(233, ${getRandomInt(0, 100)}%, ${getRandomInt(0, 100)}%)`;
  };

  for (let i = 0; i < names.length; i++) {
    const columnX = CLOUD_X + TITLE_X * 2 + (BAR_WIDTH + COLUMN_GAP) * i;
    const currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = `#000`;
    ctx.fillText(
        names[i],
        columnX,
        CLOUD_HEIGHT - GAP
    );
    ctx.fillText(
        Math.round(times[i]),
        columnX,
        CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT - currentBarHeight
    );
    ctx.fillStyle = names[i] === `Вы` ? `hsl(0, 100%, 50%)` : getRandomBlue();
    ctx.fillRect(
        columnX,
        CLOUD_HEIGHT - GAP - TEXT_HEIGHT,
        BAR_WIDTH,
        -currentBarHeight
    );
  }
};
