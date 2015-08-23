var h = require('virtual-dom/h');
var dashboard = require('../');

var items = {
  videos: {
    name: 'videos',
    list: function(data) {
      return h('ul', data.rows.map(function(video) {
        return h('li', [video.name + ' - ' + video.description]);
      }));
    }
  },
  photos: {
    name: 'photos',
    list: function(data) {
      return h('div', ['photos section']);
    }
  },
  music: {
    name: 'music',
    list: function(data) {
      return h('div', ['music section']);
    }
  }
};

dashboard( items, { el: document.getElementById('content') } );
