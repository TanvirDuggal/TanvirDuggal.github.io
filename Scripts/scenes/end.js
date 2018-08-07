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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._bck = new createjs.Bitmap("../../Assets/images/ocean.png");
            this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "Black", 400, 160, true);
            this._backButton = new objects.Button("BackButton", 400, 325, true);
            this.backGroundMusic = createjs.Sound.play("gameOver");
            this.backGroundMusic.loop = 0;
            this.backGroundMusic.volume = 0.8;
            this.Main();
        };
        End.prototype.Update = function () {
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            console.log("Started - END SCENE");
            this.addChild(this._bck);
            this.addChild(this._endLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.ScoreBoard.Score = 0;
                managers.Game.ScoreBoard.Lives = 4;
                this.backGroundMusic.stop();
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map