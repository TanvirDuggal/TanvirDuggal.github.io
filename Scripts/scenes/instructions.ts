module scenes {
    export class Instructions extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _messageLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructions1:objects.Label;
        private _instructions2:objects.Label;
        private _instructions3:objects.Label;
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
            this._welcomeLabel = new objects.Label("Welcome!", "60px", "Consolas", "black", 500, 80, true);
            this._messageLabel = new objects.Label("Press Button to start game!", "20px", "Consolas", "black", 500, 140, true);
            this._instructions1 = new objects.Label("1.Avoid bullets.", "20px", "Consolas", "black", 500, 200, true);
            this._instructions2 = new objects.Label("2.Use mouse to move back and forth.", "20px", "Consolas", "black", 500, 220, true);
            this._instructions3 = new objects.Label("4.Use space bar to jump.", "20px", "Consolas", "black", 500, 240, true);
           
            this._startButton = new objects.Button("PlayBtn", 500, 350, true);

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
            this.addChild(this._startButton);
            this.addChild(this._instructions1);   
            this.addChild(this._instructions2);
            this.addChild(this._instructions3);   

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
        }
    }
}