var Item = cc.Sprite.extend({

    appear: function () {
        this.winSize = cc.director.getWinSize();
        this.scale = 0.3;
        this.x = Math.round(Math.random() * this.winSize.width);
        this.y = this.winSize.height + 100;
        this.itemMove();
    },

    itemMove: function () {
        var dropItem = cc.moveTo(8, cc.p(Math.random() * this.winSize.width, -400));
        var moveAction = cc.sequence(cc.delayTime(5), dropItem);
        this.runAction(moveAction);
    },

});