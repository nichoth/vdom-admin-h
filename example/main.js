var h = require('virtual-dom/h');
var dashboard = require('../');

var items = {
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
};

dashboard( items, {el: document.getElementById('content')} );
