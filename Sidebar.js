var h = require('virtual-dom/h');

module.exports = function(items, onSelect) {
  return h('ul', items.map(function(item, i) {
    var a = h('a', {
      onclick: function(ev) {
        onSelect(item);
      },
      attributes:
        {
          href:'#'
        }
      },
      item + ' ' + i
    );
    return h('li', [a]);
  }));
};
