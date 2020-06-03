
var res = {
    bg_GameScene: "res/bg_GameScene.png",
    bg_MenuScene: "res/bg_MenuScene.png",
    btn_Play: "res/btn_play.png",
    main_hero: "res/main_plane.png",
    enemyRed: "res/enemies/red.png",
    enemyBlue: "res/enemies/blue.png",
    heroBullet: "res/bullets/bullet_of_hero.png",
    redBullet: "res/bullets/bullet_of_red.png",
    blueBullet: "res/bullets/bullet_of_blue.png",
    bloodItem: "res/items/blood.png",
    destroyItem: "res/items/destroy.png",
    scoreItem: "res/items/score.png",
    hitEffect: "res/effects/particle.plist",
    bg_black: "res/bg_black.jpg",
    btnReplay: "res/replay.png",
    btnInstall: "res/install_now.png"

};

var g_resources = [];

for (var i in res) {
    g_resources.push(res[i]);
}
