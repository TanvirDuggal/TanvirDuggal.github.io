module scenes {
    export class Start extends objects.Scene {
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
        private _settingsButton: objects.Button;
        private _hiyashi: createjs.Bitmap;
        private _bck: createjs.Bitmap;
        
        // constructors
        constructor() 
        {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void 
        {
            this._bck = new createjs.Bitmap("../../Assets/images/ocean.png");
            
            this._welcomeLabel = new objects.Label("THE GIRL WHO HAS NO NAME", "50px", "Consolas", "black", 400, 30, true);
            this._startButton = new objects.Button("PlayBtn", 400, 180, true);
            this._instructionButton = new objects.Button("InstructionButton", 400, 320, true);
            
            
            this._hiyashi = new createjs.Bitmap("../../Assets/images/hiyashiScreen.png");
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
            this.addChild(this._startButton);
            this.addChild(this._instructionButton);
            
            this.addChild(this._hiyashi);
            
            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._instructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTIONS;
            }, this);
            
        }
    }
}