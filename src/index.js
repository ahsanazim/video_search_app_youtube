// change require to es6 import style
import $ from 'jquery';
import './style.scss';

// counter for number of seconds elapsed
let num = 1;

function update() {
  $('#main').html(`You\'ve been on this page for ${num} seconds!`);
  num += 1;
}

// updates text of #main every second
setInterval(update, 1000);
