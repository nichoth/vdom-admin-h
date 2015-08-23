var h = require('virtual-dom/h');
var TextArea = require('./lib/TextArea.js');

var Video = function() {
  return h('div', [
    h('h2', ['video section']),
    h('div', ['description field']),
    TextArea(),
    h('div', ['upload widget'])
  ]);
};
