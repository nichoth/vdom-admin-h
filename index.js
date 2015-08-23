var h = require('virtual-dom/h');
var vdom = require('virtual-dom');
var main = require('main-loop');
var url = require('url');
var catcher = require('catch-links');
var singlePage = require('single-page');
var router = require('routes')();

module.exports = function(items, opts) {

  opts = opts || {};
  opts.el = opts.el || document.body;

  router.addRoute('/', function() {
    return h('div');
  });

  Object.keys(items).forEach(function(key) {
    router.addRoute('/' + items[key].name, function() {
      return items[key];
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

  var Sidebar = require('./Sidebar.js')(items, onSelect);
  var render = function(state) {
    return h('div', [
      Sidebar(state.activeItem),
      (state.activeItem ? state.activeItem.el : '')
    ]);
  };

  var loop = main({}, render, vdom);
  opts.el.appendChild(loop.target);

};
