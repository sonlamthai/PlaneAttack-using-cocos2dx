var Blue = Enemy.extend({

    ctor: function (layer) {

        this._super(res.enemyBlue);

        this.winSize = layer.winSize;
        this.layer = layer;
        this.blood = 800;
        this.allowShot = true;
        this.score = 400;
        this.harm = 500;
        this.collisionDistance = 50;

        this.appear();
        layer.addChild(this, 2);
        layer.enemies.push(this)

    },

    appear: function () {
        this.scale = 0.4;
        this.x = Math.round(Math.random() * this.winSize.width);
        this.y = this.winSize.height + 10;
        this.EnemyMove();

    },

    EnemyMove: function () {
        var moveAction1 = cc.moveTo(5, cc.p(Math.random() * this.winSize.width, Math.random() * this.winSize.height));
        var moveAction2 = cc.moveTo(2, cc.p(Math.random() * this.winSize.width, -400));
        this.runAction(cc.sequence(moveAction1, moveAction2));
    },

    attack: function () {
        if (this.allowShot) {
            new BlueBullet(this.layer, this);

            this.allowShot = false;

            this.scheduleOnce(function () {
                this.allowShot = true;
            }.bind(this), 0.5);

        }
    },

});