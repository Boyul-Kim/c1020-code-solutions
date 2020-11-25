/* eslint-disable no-console */
let timer = 3;
const countDown = setInterval(() => {
  if (timer === 0) {
    console.log('Blast off!');
    clearInterval(countDown);
  } else {
    console.log(timer);
    timer--;
  }

}, 1000);
