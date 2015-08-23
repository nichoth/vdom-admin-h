var h = require('virtual-dom/h');
var vdom = require('virtual-dom');
var main = require('main-loop');
var TextArea = require('../lib/TextArea.js');
var Dashboard = require('../Dashboard.js');

var data = {
  typesOfThings: ['videos', 'photos', 'music'],
  active: ''
};

var s = {
  typesOfThings: [
    {
      name: 'videos',
      el: Video
    },
    {
      name: 'photos',
      el: h('div', ['photos section'])
    },
    {
      name: 'music',
      el: h('div', ['music section'])
    }
  ],
  page: ''
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
  data.active = item === 'videos' ? Video() : h('div', [item]);
  loop.update(data);
}

function onSave(ev) {
  ev.preventDefault();
  console.log("save");
  console.log(this.elements);
}

var render = function(state) {
  return Dashboard( state, {onSave: onSave, onSelect: onSelect} );
};

var loop = main(data, render, vdom);
document.querySelector('#content').appendChild(loop.target);
