module scenes {
    export class Settings extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _messageLabel: objects.Label;
        private _playBtn: objects.Button;
        
        private _bck: createjs.Bitmap;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._bck = new createjs.Bitmap("../../Assets/images/ocean.png");
            this._welcomeLabel = new objects.Label("Settings!", "60px", "Consolas", "Black", 500, 80, true);
            this._messageLabel = new objects.Label("Press Button to change settings!", "20px", "Consolas", "black", 500, 140, true);
           
            this._playBtn = new objects.Button("PlayBtn", 700, 240, true);

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log("Started - START SCENE");
            this.addChild(this._bck);
            this.addChild(this._welcomeLabel);
            this.addChild(this._messageLabel);
            this.addChild(this._playBtn); 

            this._playBtn.on("click", function(){
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        }
    }
}