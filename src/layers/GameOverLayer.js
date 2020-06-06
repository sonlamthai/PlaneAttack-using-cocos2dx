var GameOverLayer = cc.Layer.extend({
    ctor: function (gameLayer) {
        this._super();
        this.gameLayer = gameLayer;
        this.winSize = cc.winSize;

        var bgGameOver = new ccui.ImageView(res.bg_black);
        bgGameOver.x = this.winSize.width / 2;
        bgGameOver.y = this.winSize.height / 2;
        bgGameOver.opacity = 100;
        this.addChild(bgGameOver);

        var youLose = new cc.LabelTTF("You Lose !!!", "Arial", 50);
        youLose.x = this.winSize.width / 2;
        youLose.y = this.winSize.height / 2 + 200;
        this.addChild(youLose);

        var yourScore = new cc.LabelTTF("Your Score: "+ gameLayer.score, "Arial", 30);
        yourScore.x = this.winSize.width / 2;
        yourScore.y = this.winSize.height / 2 + 100;
        this.addChild(yourScore);

        var replayButton = new cc.MenuItemImage(res.btnReplay, res.btnReplay, this.replayGame, this);
        var menu = new cc.Menu(replayButton);
        menu.x = this.winSize.width / 2;
        menu.y = this.winSize.height / 2 - 50;
        this.addChild(menu);

    },


    replayGame: function () {
        this.gameLayer.unscheduleUpdate();
        cc.game.bulletController = new BulletController();
        cc.game.enemyController = new EnemyController();
        cc.game.itemController = new ItemController();
        cc.game.gameController = new GameController();
        cc.director.runScene(new GameScene());
        cc.director.resume();
    }
});