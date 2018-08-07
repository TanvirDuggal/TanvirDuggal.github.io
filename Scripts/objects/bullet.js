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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        // constructors
        function Bullet() {
            var _this = _super.call(this, "bullet-fire") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Bullet.prototype._checkBounds = function () {
            // check the bottom boundary
            if (this.x <= (0)) {
                //   alert("13");
                this.bulletShoot = createjs.Sound.play("bulletFire");
                this.bulletShoot.loop = 0;
                this.bulletShoot.volume = 0.5;
                //   this.bulletShoot.destroy();   
                managers.Game.ScoreBoard.Score += 100;
                if (managers.Game.ScoreBoard.Score % 1000 == 0) {
                    managers.Game.ScoreBoard.Lives += 1;
                }
                this.Reset();
            }
        };
        // public methods
        Bullet.prototype.Start = function () {
            this._verticalSpeed = 5; // the island will move down 5ppf
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this.x -= this._verticalSpeed;
            this._checkBounds();
        };
        Bullet.prototype.Reset = function () {
            this.y = Math.floor((Math.random() * (400 - 200) + 200));
            // alert(this.height + " > " + this.halfHeight);
            //this.y = 400; 
            this.x = 900;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map