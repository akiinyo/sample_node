var properties = {};

exports.setProperty = function(name, value) {
  properties[name] = value;
};

exports.print = function() {
  console.log(properties);
};
