var HeroBullet = Bullet.extend({

    bulletType: res.heroBullet,

    bulletLocation: [{ x: -20, y: 20 }, { x: 20, y: 20 }],

    bulletOwner: "hero",

    damage: 50,

    launch: function () {
        for (var i = 0; i < this.bulletLocation.length; i++) {
            var newHeroBullet = new cc.Sprite(this.bulletType);
            newHeroBullet.scale = 0.1;
            newHeroBullet.x = this.bulletLocation[i].x + this.plane.x;
            newHeroBullet.y = this.bulletLocation[i].y + this.plane.y;
            this.layer.addChild(newHeroBullet, 1);
            this.moveBullets(newHeroBullet);
            this.bullets.push(newHeroBullet);
        }

        this.layer.bulletInLayer.push(this);
    },

    moveBullets: function (newHeroBullet) {
        var winSize = cc.director.getWinSize();
        var move = cc.moveTo(2, cc.p(newHeroBullet.x, winSize.height + 300));
        newHeroBullet.runAction(move);
    }
});