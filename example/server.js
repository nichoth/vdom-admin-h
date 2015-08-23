var ecstatic = require('ecstatic')({root: __dirname});
var http = require('http');
var router = require('routes')();

router.addRoute('/api/:type', function(req, res, params) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({rows: [
    {
      name: params.type + ' the first',
      description: 'this is a description'
    }
  ]}));
});

http.createServer(function(req, res) {

  var m = router.match(req.url);
  if (m) {
    m.fn(req, res, m.params);
  }
  else {
    ecstatic(req, res);
  }

}).listen(8000);
console.log('listening on :8000');
