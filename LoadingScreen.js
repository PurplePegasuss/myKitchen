class LoadingScreen extends Phaser.Scene {
    constructor() {
        super("LoadingScreen");
    }
    preload() {
    }
    update() {
        
    }
    create() {
        this.scene.start("MainScreen");
    }
}
