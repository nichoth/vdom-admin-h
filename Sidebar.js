var h = require('virtual-dom/h');

module.exports = function(items, onSelect) {
  return render.bind(null);

  function render(activeItem) {
    var activeName = activeItem ? activeItem.name : '';

    return h(
      'ul',
      {className: 'lil-ui-sidebar'},
      Object.keys(items).map(function(item, i) {
        var a = h('a', {
          onclick: function(ev) {
            onSelect(ev, items[item]);
          },
          className: items[item].name === activeName ? 'active' : '',
          attributes:
            {
              href: '/' + items[item].name
            }
          },
          items[item].name + ' ' + i
        );
        return h('li', [a]);
      })
    );
  }
};
