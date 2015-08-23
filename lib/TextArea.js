var h = require('virtual-dom/h');

var TextArea = function() {
  return h('div', [
    h('textarea', {className: 'lil-ui-textarea'})
  ]);
};

module.exports = TextArea;
