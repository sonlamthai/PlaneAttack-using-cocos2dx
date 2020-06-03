var GameController = cc.Class.extend({

    mainGame: function (layer) {
        layer.hero.shot();
        cc.game.enemyController.addEnemy(layer);
        cc.game.enemyController.enemyAttack(layer);
        cc.game.bulletController.collisionCheck(layer);
        cc.game.bulletController.freeBullets(layer);
        cc.game.enemyController.collisionCheck(layer);
        cc.game.enemyController.freeEnemies(layer);
        cc.game.itemController.addItem(layer);
        cc.game.itemController.addDestroy(layer);
        cc.game.itemController.collisionCheck(layer);
        cc.game.itemController.freeItems(layer);
    }
});