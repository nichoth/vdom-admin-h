var h = require('virtual-dom/h');
var Sidebar = require('./Sidebar.js');
var catchLinks = require('catch-links');
var singlePage = require('single-page');
var router = require('routes')();
var Video = require('./Video.js');

router.addRoute('/', function() {

});

router.addRoute('/videos', function() {
  return Video();
});

var show = singlePage(function(href) {
  var m = router.match(href);
  if (m) {
    loop.update({page: m.fn()});
  }

});

var Page = function() {

};

var MainPart = function(part, onSave) {
  function submitHandler(ev) {
    onSave.call(this, ev);
  }
  return h('form', { onsubmit: submitHandler }, [
    part,
    h('button', {type: 'submit'}, ['save'])
  ]);
};

function onSelect(ev, item) {
  data.active = item === 'videos' ? Video() : h('div', [item]);
  loop.update(data);
}

module.exports = function(state, handlers) {
  var s = Sidebar(state.typesOfThings, onSelect);

  var mainPart = state.active ? MainPart(state.active, handlers.onSave) : '';
  return h('div', {className: 'lil-ui-dashboard'}, [s, mainPart]);
};

