var Color = /** @class */ (function () {
    function Color() {
        this.color = "";
    }
    Color.prototype.getColor = function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        this.color = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
        return this.color;
    };
    return Color;
}());
var unColor = new Color();
console.log(unColor.getColor());
console.log(unColor.getColor());
