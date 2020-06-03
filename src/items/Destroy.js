var Destroy = Item.extend({
    ctor: function (layer) {
        this._super(res.destroyItem);
        this.itemName = "destroy";
        this.collisionDistance = 50;
        this.layer = layer;

        this.appear();

        layer.addChild(this, 2);
        layer.items.push(this)
    },

    itemMove: function () {
        var dropItem = cc.moveTo(10, cc.p(Math.random() * this.winSize.width, -400));
        var moveAction = cc.sequence(cc.delayTime(25), dropItem);
        this.runAction(moveAction);
    },

    destroy: function () {
        for (var i = 0; i < this.layer.enemies.length; i++) {
            var enemy = this.layer.enemies[i];
            enemy.blood = 0;
        }
    }



});