var ItemController = cc.Class.extend({

    ctor: function () {
        this.winSize = cc.director.getWinSize();
        this.allowAddItem = true;
        this.allowAddDestroy = true

        this.itemList = [Blood, Score];
    },

    addItem: function (layer) {
        var item = this.itemList[Math.floor(Math.random() * 2)];

        if (this.allowAddItem) {
            new item(layer);
            this.allowAddItem = false;
            layer.scheduleOnce(function () {
                this.allowAddItem = true;
            }.bind(this), 10);
        }
    },

    addDestroy: function (layer) {
        if (this.allowAddDestroy) {
            new Destroy(layer);

            this.allowAddDestroy = false;

            layer.scheduleOnce(function () {
                this.allowAddDestroy = true;

            }.bind(this), 15);
        }
    },



    collisionCheck: function (layer) {
        var hero = layer.hero;

        for (var i = 0; i < layer.items.length; i++) {
            var item = layer.items[i];

            if (this.collide(item.x, item.y, hero.x, hero.y, item.collisionDistance)) {

                if (item.itemName == "blood") {
                    hero.blood += item.extraBlood;
                }

                if (item.itemName == "destroy") {
                    item.destroy();
                }

                if (item.itemName == "score") {
                    layer.score += item.extraScore;
                }

                layer.removeChild(item);
                layer.items.splice(i, 1);
                i--;
            }
        }
    },

    collide: function (x1, y1, x2, y2, collisionDistance) {

        if (Math.sqrt((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))) > collisionDistance) {
            return false;
        }
        else {
            return true;
        }
    },

    freeItems: function (layer) {
        for (var i = 0; i < layer.items.length; i++) {
            var item = layer.items[i];

            if (!(item.x > -200 && item.x < this.winSize.width + 200 && item.y > -200 && item.y < this.winSize.height + 200)) {
                layer.removeChild(item);
                layer.items.splice(i, 1);
                i--;
            }
        }
    }
});