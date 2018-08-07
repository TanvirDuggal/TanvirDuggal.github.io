module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _hiyashi:objects.Hiyashi;
        private _env:objects.Environment;
        private _bullet:objects.Bullet;
        public  backGroundMusic:createjs.AbstractSoundInstance;
        private _cloudNum:number;
        private _clouds:objects.Cloud[];
        
        // constructors
        constructor() {
            super();
            this.Start();
        }

         private methods
        private _buildClouds():void {
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
                this._clouds[count] = new objects.Cloud();

            }
        }

        // public methods
        public Start():void {

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
            this._clouds = new Array<objects.Cloud>();
             this._buildClouds();

            this.Main();
        }

        public Update():void {
            this._hiyashi.Update();
            this._env.Update();
            this._bullet.Update();
            this._bullet.Update();
            managers.Collision.check(this._hiyashi, this._bullet);

            this._clouds.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._hiyashi, cloud);
            });
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
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
            for (const cloud of this._clouds) {
                this.addChild(cloud);
             }
        }
    }
}