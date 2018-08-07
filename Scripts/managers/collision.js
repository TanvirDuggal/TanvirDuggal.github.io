var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "bullet-fire":
                            createjs.Sound.play("hit");
                            if (managers.Game.ScoreBoard.Lives == 1) {
                                managers.Game.CurrentState = config.Scene.END;
                                return true;
                            }
                            else {
                                managers.Game.ScoreBoard.Lives -= 1;
                            }
                            object2.Reset();
                            break;
                        case "cloud":
                            createjs.Sound.play("hit");
                            if (managers.Game.ScoreBoard.Lives == 1) {
                                managers.Game.CurrentState = config.Scene.END;
                                return true;
                            }
                            else {
                                managers.Game.ScoreBoard.Lives -= 1;
                            }
                            object2.Reset();
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map