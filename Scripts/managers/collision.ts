module managers {
    export class Collision {
        public static check(object1:objects.GameObject, object2:objects.GameObject) {
            let P1:math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2:math.Vec2 = new math.Vec2(object2.x, object2.y);
            
            if(math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if(!object2.isColliding) 
                {
                    managers.Game.CurrentState = config.Scene.END;
                    return true;
                /*    object2.isColliding = true;
                    switch(object2.name) {
                        case "island":
                        createjs.Sound.play("yay");
                        break;

                        case "cloud":
                        createjs.Sound.play("thunder");
                        break;
                    }
                }*/
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}}