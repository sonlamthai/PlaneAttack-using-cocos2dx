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

        if (gameLayer.enemies.length == 0) {
            var youWin = new cc.LabelTTF("You Win", "Arial", 50);
            youWin.x = this.winSize.width / 2;
            youWin.y = this.winSize.height / 2 + 200;
            this.addChild(youWin);
        }

        if (gameLayer.hero.blood < 0 && gameLayer.enemies.length != 0) {
            var youLose = new cc.LabelTTF("You Lose", "Arial", 50);
            youLose.x = this.winSize.width / 2;
            youLose.y = this.winSize.height / 2 + 200;
            this.addChild(youLose);
        }

        var replayButton = new cc.MenuItemImage(res.btnReplay, res.btnReplay, this.replayGame, this);
        var menu = new cc.Menu(replayButton);
        menu.x = this.winSize.width / 2;
        menu.y = this.winSize.height / 2 + 50;
        this.addChild(menu);

        var installButton = new cc.MenuItemImage(res.btnInstall, res.btnInstall, this.installGame, this);
        var menu2 = new cc.Menu(installButton);
        menu2.x = this.winSize.width / 2;
        menu2.y = this.winSize.height / 2 - 50;
        this.addChild(menu2);
    },

    installGame: function () {
        cc.sys.openURL("https://play.google.com/store/apps/details?id=com.game.space.shooter2");
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