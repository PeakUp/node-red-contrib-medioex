var MedIOEx = require("medioex-js");

module.exports = function(RED) {
  function analogOutputInit(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.on("input", function(msg){
      MedIOEx.analogOutputInit();
      node.send(msg);
    });
  };
  RED.nodes.registerType("analog-output-init", analogOutputInit);
}