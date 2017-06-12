var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function digitalSetLow(config) {
    RED.nodes.createNode(this,config);
    this.pin = config.pin;
    var node = this;
    node.on("input", function(msg){
      MedIOEx.digitalSetLow(msg.pin || node.pin);
      node.send(msg);
    });
  };
  RED.nodes.registerType("digital-set-low", digitalSetLow);
}