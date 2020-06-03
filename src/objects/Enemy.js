var Enemy = cc.Sprite.extend({


    appear: function () {

    },

    attack: function () {

    },

    wasHit: function (damage) {
        this.blood -= damage;

        var hitEffect = new cc.ParticleSystem(res.hitEffect);
        hitEffect.duration = 0.5;
        hitEffect.setAutoRemoveOnFinish(true);
        hitEffect.x = this.x;
        hitEffect.y = this.y;
        this.layer.addChild(hitEffect);
    }

});