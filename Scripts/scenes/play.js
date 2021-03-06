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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Play.prototype._buildClouds = function () {
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
                this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this._hiyashi = new objects.Hiyashi();
            this._env = new objects.Environment();
            this._bullet = new objects.Bullet();
            this._bullet = new objects.Bullet();
            this._bullet = new objects.Bullet();
            this.backGroundMusic = createjs.Sound.play("bck");
            this.backGroundMusic.loop = -1;
            this.backGroundMusic.volume = 0.1;
            this._cloudNum = 3;
            //  create an empty Array List-like object of clouds
            this._clouds = new Array();
            this._buildClouds();
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._hiyashi.Update();
            this._env.Update();
            this._bullet.Update();
            this._bullet.Update();
            managers.Collision.check(this._hiyashi, this._bullet);
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.check(_this._hiyashi, cloud);
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            console.log("Started - PLAY SCENE");
            // add the Ocean object to the scene
            this.addChild(this._env);
            // add the Island object to the scene
            this.addChild(this._bullet);
            // add the Plane object to the scene
            this.addChild(this._hiyashi);
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            // add the Cloud(s) to the scene
            for (var _i = 0, _a = this._clouds; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map