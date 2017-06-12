var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function analogWriteValue(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.pin = config.pin;
    node.on("input", function(msg){
      msg.payload = MedIOEx.analogWriteValue(msg.pin || node.pin,msg.payload);
      node.send(msg);
    });
  };
  RED.nodes.registerType("analog-write-value", analogWriteValue);
}