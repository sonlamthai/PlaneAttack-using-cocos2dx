
cc.game.onStart = function () {
    var sys = cc.sys;
    if (!sys.isNative && document.getElementById("cocosLoading"))
        document.body.removeChild(document.getElementById("cocosLoading"));

    cc.view.enableRetina(sys.os === sys.OS_IOS ? true : false);

    if (sys.isMobile &&
        sys.browserType !== sys.BROWSER_TYPE_BAIDU &&
        sys.browserType !== sys.BROWSER_TYPE_WECHAT) {
        cc.view.enableAutoFullScreen(true);
    }

    cc.view.adjustViewPort(true);

    cc.view.setDesignResolutionSize(512, 768, cc.ResolutionPolicy.SHOW_ALL);

    cc.view.resizeWithBrowserSize(true);

    cc.LoaderScene.preload(g_resources, function () {
        cc.game.bulletController = new BulletController();
        cc.game.enemyController = new EnemyController();
        cc.game.itemController = new ItemController();
        cc.game.gameController = new GameController();
        cc.director.runScene(new MenuScene());
    }, this);
};

cc.game.run();