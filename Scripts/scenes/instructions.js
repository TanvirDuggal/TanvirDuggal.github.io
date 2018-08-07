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
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // constructors
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instructions.prototype.Start = function () {
            this._bck = new createjs.Bitmap("../../Assets/images/ocean.png");
            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "black", 500, 80, true);
            this._messageLabel = new objects.Label("Press Button to start game!", "20px", "Consolas", "black", 500, 140, true);
            this._instructions1 = new objects.Label("1.Avoid bullets.", "20px", "Consolas", "black", 500, 200, true);
            this._instructions2 = new objects.Label("2.Use mouse to move back and forth.", "20px", "Consolas", "black", 500, 220, true);
            this._instructions3 = new objects.Label("4.Use space bar to jump.", "20px", "Consolas", "black", 500, 240, true);
            this._startButton = new objects.Button("PlayBtn", 500, 350, true);
            this.Main();
        };
        Instructions.prototype.Update = function () {
        };
        Instructions.prototype.Reset = function () {
        };
        Instructions.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Instructions.prototype.Main = function () {
            console.log("Started - START SCENE");
            this.addChild(this._bck);
            this.addChild(this._welcomeLabel);
            this.addChild(this._messageLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructions1);
            this.addChild(this._instructions2);
            this.addChild(this._instructions3);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map