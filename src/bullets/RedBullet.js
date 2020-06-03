var RedBullet = Bullet.extend({

    bulletType: res.redBullet,

    bulletLocation: [{ x: 0, y: 0 }],

    bulletOwner: "enemy",

    damage: 50,

    launch: function () {
        for (var i = 0; i < this.bulletLocation.length; i++) {
            var newRedBullet = new cc.Sprite(this.bulletType);
            newRedBullet.scale = 0.08;
            newRedBullet.x = this.bulletLocation[i].x + this.plane.x;
            newRedBullet.y = this.bulletLocation[i].y + this.plane.y;
            // cc.log(newRedBullet.x);
            // cc.log(newRedBullet.y);
            this.layer.addChild(newRedBullet, 2);
            this.moveBullets(newRedBullet);
            this.bullets.push(newRedBullet);
            // cc.log(this.bullets.length);
        }

        this.layer.bulletInLayer.push(this);
    },

    moveBullets: function (newRedBullet) {
        var winSize = cc.director.getWinSize();
        var action = cc.moveTo(5, cc.p(newRedBullet.x, -(winSize.height + 300)));
        var rotation = cc.rotateBy(5, 360, 360);
        newRedBullet.runAction(cc.spawn(action, rotation));
    }

});