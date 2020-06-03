
var MenuLayer = cc.Layer.extend({

    ctor: function () {
        this._super();

        var winSize = cc.winSize;
        cc.log(winSize);

        var bgMenuScene = new ccui.ImageView(res.bg_MenuScene);
        bgMenuScene.x = winSize.width / 2;
        bgMenuScene.y = winSize.height / 2;
        bgMenuScene.setOpacity(150);
        this.addChild(bgMenuScene);

        var playButton = new cc.MenuItemImage(res.btn_Play, res.btn_Play, this.startGame, this);
        var menu = new cc.Menu(playButton);
        menu.x = winSize.width / 2;
        menu.y = winSize.height / 2 - 50;

        this.addChild(menu);
    },

    startGame: function () {
        var gameScene = new GameScene();
        cc.director.runScene(new cc.TransitionFade(0.5, gameScene));
    }
});

var MenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});

