var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function analogInputInit(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.on("input", function(msg){
      MedIOEx.analogInputInit();
      node.send(msg);
    });
  };
  RED.nodes.registerType("analog-input-init", analogInputInit);
}