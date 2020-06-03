var Hero = cc.Sprite.extend({

    ctor: function (layer) {
        this._super(res.main_hero);

        this.layer = layer;
        this.allowShot = true;
        this.blood = 2000;
    },

    shot: function () {
        if (this.allowShot) {

            new HeroBullet(this.layer, this.layer.hero);
            this.allowShot = false;

            this.scheduleOnce(function () {
                this.allowShot = true;
            }.bind(this), 0.1);
        }
    },

    wasHit: function (damage) {
        this.blood -= damage;

        var hitEffect = new cc.ParticleSystem(res.hitEffect);
        hitEffect.duration = 0.5;
        hitEffect.setAutoRemoveOnFinish(true);
        hitEffect.x = this.x;
        hitEffect.y = this.y;
        this.layer.addChild(hitEffect, 5);
    }
});