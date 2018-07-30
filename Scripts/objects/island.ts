module objects {
    export class Island extends objects.GameObject {
        // member variables
        private _verticalSpeed:number;
        private bulletShoot:createjs.AbstractSoundInstance;
        // constructors
        constructor() {
            super("bullet-fire");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the bottom boundary
            if(this.x <= (0)) 
            {
             //   alert("13");
                this.bulletShoot = createjs.Sound.play("bulletFire");
                this.bulletShoot.loop = 1;
                this.bulletShoot.volume = 0.8;
             //   this.bulletShoot.destroy();   
                this.Reset();
            }

        }

         // public methods
         public Start():void {
             this._verticalSpeed = 5; // the island will move down 5ppf

             this.Reset();
        }

        public Update():void {
            this.x -= this._verticalSpeed;
            
            this._checkBounds();
        }

        public Reset():void 
        {
            this.y = Math.floor((Math.random() * (400 - 200) + 200));
           // alert(this.height + " > " + this.halfHeight);
           //this.y = 400; 
           this.x = 900;

            
              
        }
    }
}