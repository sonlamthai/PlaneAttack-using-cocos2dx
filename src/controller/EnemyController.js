var EnemyController = cc.Class.extend({

    ctor: function () {
        this.allowAddEnemy = true;
        this.enemies = [Red, Blue];
        this.enemyFrequency = 1;

        this.winSize = cc.director.getWinSize();

    },

    addEnemy: function (layer) {
        if (this.allowAddEnemy) {
            var enemy = this.enemies[Math.floor(Math.random() * 2)];
            new enemy(layer);

            this.allowAddEnemy = false;

            layer.scheduleOnce(function () {
                this.allowAddEnemy = true;
            }.bind(this), this.enemyFrequency)
        }
    },

    enemyAttack: function (layer) {
        for (var i = 0; i < layer.enemies.length; i++) {
            layer.enemies[i].attack();
        }
    },

    removeEnemy: function (layer, enemy, index) {
        layer.score += enemy.score;

        layer.removeChild(enemy);
        layer.enemies.splice(index, 1);
    },


    collisionCheck: function (layer) {
        var hero = layer.hero;

        for (var i = 0; i < layer.enemies.length; i++) {
            var enemy = layer.enemies[i];

            if (this.collide(enemy.x, enemy.y, hero.x, hero.y, enemy.collisionDistance)) {
                hero.blood -= enemy.harm;
                this.removeEnemy(layer, enemy, i);
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

    freeEnemies: function (layer) {
        for (var i = 0; i < layer.enemies.length; i++) {
            var enemy = layer.enemies[i];

            if (!(enemy.x > -200 && enemy.x < this.winSize.width + 200 && enemy.y > -200 && enemy.y < this.winSize.height + 200)) {
                this.removeEnemy(layer, enemy, i);
                i--;
            }
        }
    }
});