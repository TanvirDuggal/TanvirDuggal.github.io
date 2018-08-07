var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Hiyashi = /** @class */ (function (_super) {
        __extends(Hiyashi, _super);
        // member variables
        // constructors
        function Hiyashi() {
            var _this = _super.call(this, "hiyashi") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Hiyashi.prototype._checkBounds = function () {
            // check the right boundary
            if (this.x > (config.Screen.HALF_WIDTH - this.halfWidth)) {
                this.x = config.Screen.HALF_WIDTH - this.halfWidth;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Hiyashi.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 370;
            this.x = 100;
        };
        Hiyashi.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this.Move();
            this._checkBounds();
        };
        Hiyashi.prototype.Reset = function () {
        };
        Hiyashi.prototype.Move = function () {
            if (managers.Game.keyboardManager.jump) {
                this.y = 270;
            }
            else {
                this.y = 370;
            }
        };
        return Hiyashi;
    }(objects.GameObject));
    objects.Hiyashi = Hiyashi;
})(objects || (objects = {}));
//# sourceMappingURL=hiyashi.js.map