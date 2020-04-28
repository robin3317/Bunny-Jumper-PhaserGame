import Phaser from '../lib/phaser.js';

class Game extends Phaser.Scene {
  constructor() {
    super('game');
    this.player = null;
  }

  preload() {
    this.load.image('background', 'assets/bg_layer1.png');
    this.load.image('platform', 'assets/ground_grass.png');
    this.load.image('bunny-stand', 'assets/bunny1_stand.png');
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

    this.player = this.physics.add
      .sprite(240, 320, 'bunny-stand')
      .setScale(0.5);

    this.player.body.checkCollision.up = false;
    this.player.body.checkCollision.left = false;
    this.player.body.checkCollision.right = false;

    this.physics.add.collider(platforms, this.player);

    this.cameras.main.startFollow(this.player);
  }

  update() {
    const touchingDown = this.player.body.touching.down;
    if (touchingDown) {
      this.player.setVelocity(0, -300);
    }
  }
}

export default Game;
