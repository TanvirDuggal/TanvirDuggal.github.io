module scenes {
    export class End extends objects.Scene {
        // member variables
        private _endLabel: objects.Label;
        private _backButton: objects.Button;
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

            this._endLabel = new objects.Label("Game Over!", "60px", "Consolas", "RED", 500, 160, true);
            this._backButton = new objects.Button("BackButton", 500, 360, true);

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
            console.log("Started - END SCENE");
            this.addChild(this._bck);
            this.addChild(this._endLabel);
            this.addChild(this._backButton);
            
            
            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        }
    }
}