// change require to es6 import style
import $ from 'jquery';
import './style.scss';


$('#main').html('Monkeys are coool');

let num = 1;

function update() {
  $('#main').html('You\'ve been on this page for ' + num + ' seconds .');
  num += 1;
}

setInterval(update, 1000);
