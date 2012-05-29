var fs = require('fs')
fs.readFile('dummy_file.text', function(err, data) {
  if (err) {
    console.log(err.message);
  } else {
  console.log(data);
  }
});
