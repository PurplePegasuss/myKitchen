var gameSettings = {
    currGold: 10000,
    currEnergy: 60,
    notificationsAmount: 0,
    currentCraftPage: 0
}

var config = {
    width: window.innerWidth,
    height: window.innerHeight,
    renderer: Phaser.AUTO,
    backgroundColor: 0x000000,
    scene: [LoadingScreen,MainScreen],
    pixelArt: false,
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            debugShowVelocity: false
        }
    },
    update: update,
    preload: preload
}

var game = new Phaser.Game(config);

function preload() {
}



function update(){
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.refresh()
}
