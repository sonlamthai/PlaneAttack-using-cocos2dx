var BlueBullet = Bullet.extend({

    bulletType: res.blueBullet,

    bulletLocation: [{ x: -20, y: -10 }, { x: 20, y: -10 }],

    bulletOwner: "enemy",

    damage: 100,

    launch: function () {
        for (var i = 0; i < this.bulletLocation.length; i++) {
            var newBlueBullet = new cc.Sprite(this.bulletType);
            newBlueBullet.scale = 0.08;
            newBlueBullet.x = this.bulletLocation[i].x + this.plane.x;
            newBlueBullet.y = this.bulletLocation[i].y + this.plane.y;
            this.layer.addChild(newBlueBullet, 2);
            this.moveBullets(newBlueBullet);
            this.bullets.push(newBlueBullet);
        }

        this.layer.bulletInLayer.push(this);
    },

    moveBullets: function (newBlueBullet) {
        var winSize = cc.director.getWinSize();
        var action = cc.moveTo(4, cc.p(newBlueBullet.x, -(winSize.height + 300)));
        newBlueBullet.runAction(action);
    }

});