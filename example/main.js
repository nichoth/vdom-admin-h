var h = require('virtual-dom/h');
var vdom = require('virtual-dom');
var main = require('main-loop');
var Dashboard = require('../Dashboard.js');

var data = {
  typesOfThings: ['videos', 'photos', 'music'],
  active: ''
};

var TextArea = function() {
  return h('div', [
    h('textarea')
  ]);
};

var Video = function() {
  return h('div', [
    h('h2', ['video section']),
    h('div', ['description field']),
    TextArea(),
    h('div', ['upload widget'])
  ]);
};

function onSelect(item) {
  data.active = item == 'videos' ? Video() : h('div', [item]);
  loop.update(data);
}

function onSave(ev) {
  console.log(this);
  console.log(ev.target);
}

var render = function(state) {
  return Dashboard( state, {onSave: onSave, onSelect: onSelect} );
};

var loop = main(data, render, vdom);

document.querySelector('#content').appendChild(loop.target);
