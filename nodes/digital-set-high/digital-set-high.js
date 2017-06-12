var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function digitalSetHigh(config) {
    RED.nodes.createNode(this,config);
    this.pin = config.pin;
    var node = this;
    node.on("input", function(msg){
      MedIOEx.digitalSetHigh(msg.pin || node.pin);
      node.send(msg);
    });
  };
  RED.nodes.registerType("digital-set-high", digitalSetHigh);
}