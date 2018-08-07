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
    var Settings = /** @class */ (function (_super) {
        __extends(Settings, _super);
        // constructors
        function Settings() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Settings.prototype.Start = function () {
            this._bck = new createjs.Bitmap("../../Assets/images/ocean.png");
            this._welcomeLabel = new objects.Label("Settings!", "60px", "Consolas", "Black", 500, 80, true);
            this._messageLabel = new objects.Label("Press Button to change settings!", "20px", "Consolas", "black", 500, 140, true);
            this._soundOn = new objects.Button("SoundOn", 300, 240, true);
            this._soundOff = new objects.Button("SoundOff", 500, 240, true);
            this._playBtn = new objects.Button("PlayBtn", 700, 240, true);
            this.Main();
        };
        Settings.prototype.Update = function () {
        };
        Settings.prototype.Reset = function () {
        };
        Settings.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Settings.prototype.Main = function () {
            console.log("Started - START SCENE");
            this.addChild(this._bck);
            this.addChild(this._welcomeLabel);
            this.addChild(this._messageLabel);
            this.addChild(this._soundOff);
            this.addChild(this._soundOn);
            this.addChild(this._playBtn);
            this._soundOff.on("click", function () {
                // managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._soundOn.on("click", function () {
                //managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._playBtn.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        };
        return Settings;
    }(objects.Scene));
    scenes.Settings = Settings;
})(scenes || (scenes = {}));
//# sourceMappingURL=settings.js.map