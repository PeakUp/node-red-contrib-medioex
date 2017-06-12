var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function digitalSet(config) {
    RED.nodes.createNode(this,config);
    this.pin = config.pin;
    var node = this;
    node.on("input", function(msg){
      if(typeof msg.payload === 'boolean') {
        if(msg.payload) {
	  MedIOEx.digitalSetHigh(msg.pin || node.pin);
        }
	else {
	  MedIOEx.digitalSetLow(msg.pin || node.pin);
        }
      }
      node.send(msg);
    });
  };
  RED.nodes.registerType("digital-set", digitalSet);
}