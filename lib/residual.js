// Generated by CoffeeScript 1.3.3
(function() {
  var Residual;

  Residual = (function() {

    function Residual(width, height) {
      this.width = width;
      this.height = height;
      this.buffer = new ArrayBuffer(this.width * this.height);
      this.data = new Float32Array(this.buffer);
    }

    return Residual;

  })();

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Residual;
  }

}).call(this);