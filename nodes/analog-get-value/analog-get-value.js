var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function analogGetValue(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.pin = config.pin;
    node.on("input", function(msg){
      msg.payload = MedIOEx.analogGetValue(msg.pin || node.pin);
      node.send(msg);
    });
  };
  RED.nodes.registerType("analog-get-value", analogGetValue);
}