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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._bck = new createjs.Bitmap("../../Assets/images/ocean.png");
            this._welcomeLabel = new objects.Label("THE GIRL WHO HAS NO NAME", "50px", "Consolas", "RED", 550, 30, true);
            this._startButton = new objects.Button("StartButton", 500, 360, true);
            this._hiyashi = new createjs.Bitmap("../../Assets/images/hiyashiScreen.png");
            this.Main();
        };
        Start.prototype.Update = function () {
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            console.log("Started - START SCENE");
            this.addChild(this._bck);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._hiyashi);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map