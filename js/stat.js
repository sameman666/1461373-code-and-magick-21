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

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + TITLE_X, CLOUD_Y + TITLE_Y);
  ctx.fillText(`Список результатов:`, CLOUD_X + TITLE_X, CLOUD_Y + TITLE_Y * 1.5);

  const maxTime = getMaxElement(times);

  const cssHSL = function () {
    return `hsl(` + 233 + `,` + (100 * Math.random()) + `%,` + (100 * Math.random()) + `%)`;
  };

  for (let i = 0; i < names.length; i++) {
    if (names[i] === `Вы`) {
      ctx.fillStyle = `#000`;
      ctx.fillText(
          names[i],
          CLOUD_X + TITLE_X * 2 + (BAR_WIDTH + COLUMN_GAP) * i,
          CLOUD_HEIGHT - GAP
      );
      ctx.fillText(
          Math.round(times[i]),
          CLOUD_X + TITLE_X * 2 + (BAR_WIDTH + COLUMN_GAP) * i,
          CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime
      );
      ctx.fillStyle = `hsl(0, 100%, 50%)`;
      ctx.fillRect(
          CLOUD_X + TITLE_X * 2 + (BAR_WIDTH + COLUMN_GAP) * i,
          CLOUD_HEIGHT - GAP - TEXT_HEIGHT, BAR_WIDTH,
          -(BAR_HEIGHT * times[i]) / maxTime
      );
    } else {
      ctx.fillStyle = `#000`;
      ctx.fillText(
          names[i],
          CLOUD_X + TITLE_X * 2 + (BAR_WIDTH + COLUMN_GAP) * i,
          CLOUD_HEIGHT - GAP
      );
      ctx.fillText(
          Math.round(times[i]),
          CLOUD_X + TITLE_X * 2 + (BAR_WIDTH + COLUMN_GAP) * i,
          CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime
      );
      ctx.fillStyle = cssHSL();
      ctx.fillRect(
          CLOUD_X + TITLE_X * 2 + (BAR_WIDTH + COLUMN_GAP) * i,
          CLOUD_HEIGHT - GAP - TEXT_HEIGHT, BAR_WIDTH,
          -(BAR_HEIGHT * times[i]) / maxTime
      );
    }
  }
};

