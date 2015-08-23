var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;
var fetch = require('node-fetch');
var urlJoin = require('url-join');

function Store(opts) {
  if ( !(this instanceof Store) ) return new Store();
  opts = opts || {};
  this.baseUrl = opts.baseUrl || 'http://localhost:8000/api';
}

Store.prototype.fetch = function(path) {
  return fetch(urlJoin(this.baseUrl, path))
    .then(function(resp) {
      return resp.json();
    });
};

module.exports = Store;
