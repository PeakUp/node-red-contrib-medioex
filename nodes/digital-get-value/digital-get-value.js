var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function digitalGetValue(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.pin = config.pin;
    node.on("input", function(msg){
      msg.payload = MedIOEx.digitalGetValue(msg.pin || node.pin);
      node.send(msg);
    });
  };
  RED.nodes.registerType("digital-get-value", digitalGetValue);
}