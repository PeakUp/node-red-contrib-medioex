var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function digitalOutputInputInit(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.on("input", function(msg){
      msg.payload = MedIOEx.digitalOutputInputInit();
      node.send(msg);
    });
  };
  RED.nodes.registerType("digital-output-input-init", digitalOutputInputInit);
}