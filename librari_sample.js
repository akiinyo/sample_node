var request = require('request')
request.get('http://graph.facebook.com/zuck',
    function(err, res, body) {
      console.log(body);
    }
);
