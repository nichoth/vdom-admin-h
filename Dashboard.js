var h = require('virtual-dom/h');
var Sidebar = require('./Sidebar.js');

var MainPart = function(part, onSave) {
  function handler(ev) {
    onSave(ev);
  }
  return h('div', [
    part,
    h('button', {onclick: onSave}, ['save'])
  ]);
};

module.exports = function(state, handlers) {
  var s = Sidebar(state.typesOfThings, handlers.onSelect);

  var mainPart = state.active ? MainPart(state.active, handlers.onSave) : '';
  return h('div', [s, mainPart]);
};

