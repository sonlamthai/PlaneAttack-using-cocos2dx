var BulletController = cc.Class.extend({

    collisionCheck: function (layer) {
        var heroX = layer.hero.x;
        var heroY = layer.hero.y;

        var bulletInLayer = layer.bulletInLayer;

        for (var i = 0; i < bulletInLayer.length; i++) {
            var bulletType = bulletInLayer[i];
            if (bulletType.bulletOwner == "enemy") {

                for (var k = 0; k < bulletType.bullets.length; k++) {

                    var unitBullet = bulletType.bullets[k];
                    if (this.collide(heroX, heroY, unitBullet.x, unitBullet.y, 50)) {
                        layer.removeChild(unitBullet);
                        bulletType.bullets.splice(k, 1);
                        k--;
                        layer.hero.wasHit(bulletType.damage);

                        if (bulletType.bullets.length == 0) {

                            layer.bulletInLayer.splice(i, 1);
                            i--;
                        }
                    }
                }
            }


            for (var j = 0; j < layer.enemies.length; j++) {

                var enemy = layer.enemies[j];
                var enemyX = enemy.x;
                var enemyY = enemy.y;

                for (var i = 0; i < bulletInLayer.length; i++) {

                    var bulletType = bulletInLayer[i];
                    if (bulletType.bulletOwner == "hero") {

                        for (var k = 0; k < bulletType.bullets.length; k++) {

                            var unitBullet = bulletType.bullets[k];
                            if (this.collide(enemyX, enemyY, unitBullet.x, unitBullet.y, enemy.collisionDistance)) {
                                layer.removeChild(unitBullet);
                                bulletType.bullets.splice(k, 1);
                                k--;
                                enemy.wasHit(bulletType.damage);

                                if (bulletType.bullets.length == 0) {
                                    layer.bulletInLayer.splice(i, 1);
                                    i--;

                                }
                            }
                        }
                    }
                }

                if (enemy.blood <= 0) {

                    cc.game.enemyController.removeEnemy(layer, enemy, j);
                    j--;
                }
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

    freeBullets: function (layer) {

        if (layer.bulletInLayer.length > 0) {
            for (var i = 0; i < layer.bulletInLayer.length; i++) {
                var bullet = layer.bulletInLayer[i];
                if (!bullet.checkPosBullets()) {
                    layer.removeChild(bullet);
                    layer.bulletInLayer.splice(i, 1);
                    i--;
                }
            }
        }
    }
});