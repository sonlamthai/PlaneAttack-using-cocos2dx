var GameLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.winSize = cc.winSize;

        this.score = 0;

        this.bulletInLayer = [];

        this.enemies = [];

        this.items = [];

        this.bgGameSceneDown = new ccui.ImageView(res.bg_GameScene);
        this.bgGameSceneDown.x = this.winSize.width / 2;
        this.bgGameSceneDown.y = this.winSize.height / 2;
        this.addChild(this.bgGameSceneDown);

        this.bgGameSceneUp = new ccui.ImageView(res.bg_GameScene);
        this.bgGameSceneUp.x = this.winSize.width / 2;
        this.bgGameSceneUp.y = this.winSize.height / 2 + this.winSize.height;
        this.addChild(this.bgGameSceneUp);

        this.hero = new Hero(this);
        this.hero.scale = 0.4;
        this.hero.x = this.winSize.width / 2;
        this.hero.y = this.winSize.height / 2 - 200;
        this.addChild(this.hero, 3);


        var healthLabel = new cc.LabelTTF("Health:", "Arial", 20);
        healthLabel.x = 50;
        healthLabel.y = this.winSize.height - 30;
        this.addChild(healthLabel, 5);

        this.healthValue = new cc.LabelTTF("0", "Arial", 20);
        this.healthValue.x = 110;
        this.healthValue.y = this.winSize.height - 30;
        this.addChild(this.healthValue, 5);

        var scoreLabel = new cc.LabelTTF("Score:", "Arial", 20);
        scoreLabel.x = this.winSize.width - 100;
        scoreLabel.y = this.winSize.height - 30;
        this.addChild(scoreLabel, 5);

        this.scoreValue = new cc.LabelTTF("0", "Arial", 20);
        this.scoreValue.x = this.winSize.width - 40;
        this.scoreValue.y = this.winSize.height - 30;
        this.addChild(this.scoreValue, 5);



        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this._onTouchBegan.bind(this)
        }, this)


        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch, event) {
                return true;
            },

            onTouchMoved: this._onTouchMoved.bind(this)
        }, this.hero)


        this.scheduleUpdate();

    },

    update: function () {
        this.scrollBackground();

        cc.game.gameController.mainGame(this);

        this.updateInfo();

        this.gameOverCheck(this);
    },

    updateInfo: function () {
        var playerHealth = "";
        var playerScore = "";

        playerHealth = this.hero.blood > 0 ? this.hero.blood : 0;
        playerScore = this.score > 0 ? this.score : 0;

        this.healthValue.setString(playerHealth.toString());
        this.scoreValue.setString(playerScore.toString());
    },

    gameOverCheck: function (layer) {
        if (this.hero.blood <= 0 ) {
            cc.director.pause();
            var gameOverLayer = new GameOverLayer(layer);
            this.addChild(gameOverLayer, 7);
        }
    },

    _onTouchBegan: function (touch, event) {
        this.touchX = touch.getLocation().x;
        this.touchY = touch.getLocation().y;

        var actionClickHero = cc.moveTo(0.5, cc.p(this.touchX, this.touchY));
        if (this.action != null) {
            this.hero.stopAllActions();
        }

        this.hero.runAction(actionClickHero);
        this.action = actionClickHero;
    },

    _onTouchMoved: function (touch, event) {
        this.moveHero(touch.getLocation());
    },


    scrollBackground: function () {

        this.bgGameSceneDown.y -= Math.ceil(this.winSize.height * 0.004);
        this.bgGameSceneUp.y -= Math.ceil(this.winSize.height * 0.004);

        if (this.bgGameSceneDown.y < -(this.winSize.height / 2)) {

            this.bgGameSceneDown.y = this.winSize.height / 2;
            this.bgGameSceneUp.y = this.winSize.height / 2 + this.winSize.height;

        }
    },

    moveHero: function (pos) {
        if (pos.x > 0 && pos.x < this.winSize.width && pos.y > 0 && pos.y < this.winSize.height) {
            this.hero.setPosition(pos);
        }
    },
});

