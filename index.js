var h = require('virtual-dom/h');
var vdom = require('virtual-dom');
var main = require('main-loop');
var TextArea = require('./lib/TextArea.js');
var Dashboard = require('../Dashboard.js');

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

module.exports = function(things, opts) {
  opts = opts || {};
  opts.el = opts.el || document.body;

  var render = function(things) {
    return Dashboard( things, {onSave: onSave, onSelect: onSelect} );
  };

  var loop = main(things, render, vdom);
  el.appendChild(loop.target);
};
