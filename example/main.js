var h = require('virtual-dom/h');
var vdom = require('virtual-dom');
var main = require('main-loop');
var url = require('url');

var s = {
  typesOfThings: {
    videos: {
      name: 'videos',
      el: h('div', ['video section'])
    },
    photos: {
      name: 'photos',
      el: h('div', ['photos section'])
    },
    music: {
      name: 'music',
      el: h('div', ['music section'])
    }
  }
};


var catcher = require('catch-links');
var singlePage = require('single-page');
var router = require('routes')();

router.addRoute('/', function() {
  return h('div');
});

Object.keys(s.typesOfThings).forEach(function(key) {
  router.addRoute('/' + s.typesOfThings[key].name, function() {
    return s.typesOfThings[key];
  });
});

var show = singlePage(function(href) {
  var path = url.parse(href).pathname;
  var m = router.match(path);
  if (m) {
    var item = m.fn();
    loop.update({ activeItem: item });
  }
});

catcher(document.getElementById('content'), function(href) {
  show(href);
});

function onSelect(ev, item) {
  console.log(ev.target + ' clicked');
}

var Sidebar = require('../Sidebar.js')(s.typesOfThings, onSelect);
var render = function(state) {
  return h('div', [
    Sidebar(state.activeItem),
    (state.activeItem ? state.activeItem.el : '')
  ]);
};

var loop = main({}, render, vdom);
document.querySelector('#content').appendChild(loop.target);
