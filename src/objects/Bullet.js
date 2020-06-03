var Bullet = cc.Class.extend({

    ctor: function (layer, plane) {

        this.plane = plane;
        this.layer = layer;
        this.winSize = layer.winSize;

        this.bullets = [];

        this.launch();
    },

    checkPosBullets: function () {

        for (var i = 0; i < this.bullets.length; i++) {
            var bullet = this.bullets[i];
            if (bullet.x > 0 && bullet.x < this.winSize.width && bullet.y > 0 && bullet.y < this.winSize.height) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    launch: function () {

    }
});