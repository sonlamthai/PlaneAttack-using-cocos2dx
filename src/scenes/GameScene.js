var GameScene = cc.Scene.extend({
    ctor: function () {
        this._super();

        var gameLayer = new GameLayer();
        this.addChild(gameLayer);
    }
});
