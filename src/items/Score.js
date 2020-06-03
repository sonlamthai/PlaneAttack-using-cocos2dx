var Score = Item.extend({

    ctor: function (layer) {
        this._super(res.scoreItem);
        this.itemName = "score";
        this.extraScore = 100;
        this.collisionDistance = 50;

        this.appear();

        layer.addChild(this, 2);
        layer.items.push(this)
    },
});