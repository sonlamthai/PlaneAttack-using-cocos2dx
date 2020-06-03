var Blood = Item.extend({

    ctor: function (layer) {
        this._super(res.bloodItem);
        this.itemName = "blood";
        this.extraBlood = 500;
        this.collisionDistance = 50;

        this.appear();

        layer.addChild(this, 2);
        layer.items.push(this)
    },

});