var Red = Enemy.extend({

    ctor: function (layer) {

        this._super(res.enemyRed);
        this.layer = layer;
        this.winSize = layer.winSize;
        this.layer = layer;
        this.blood = 500;
        this.allowShot = true;
        this.score = 200;
        this.harm = 300;
        this.collisionDistance = 50;

        this.appear();
        layer.addChild(this, 2);
        layer.enemies.push(this)

        // cc.log(layer.enemies.length);
    },

    appear: function () {
        this.scale = 0.3;
        this.x = Math.round(Math.random() * this.winSize.width);
        this.y = this.winSize.height + 10;
        this.EnemyMove();

    },

    EnemyMove: function () {
        var moveAction = cc.moveTo(7, cc.p(Math.random() * this.winSize.width, -400));
        this.runAction(moveAction);
    },

    attack: function () {
        if (this.allowShot) {
            new RedBullet(this.layer, this);

            this.allowShot = false;

            this.scheduleOnce(function () {
                this.allowShot = true;
            }.bind(this), 0.5);

        }
    },

});