import Phaser from '../lib/phaser.js';

class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('background', 'assets/bg_layer1.png');
    this.load.image('platform', 'assets/ground_grass.png');
  }

  create() {
    this.add.image(240, 320, 'background');

    const platforms = this.physics.add.staticGroup();
    for (let i = 0; i < 5; i++) {
      const x = Phaser.Math.Between(80, 400);
      const y = 150 * i;

      const platform = platforms.create(x, y, 'platform');
      platform.scale = 0.5;

      const body = platform.body;
      body.updateFromGameObject();
    }
  }
}

export default Game;
