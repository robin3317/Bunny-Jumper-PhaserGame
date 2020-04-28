import Phaser from '../lib/phaser.js';

class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  preload() {
    this.load.image('background', 'assets/bg_layer1.png');
  }

  create() {
    this.add.image(240, 320, 'background');
  }
}

export default Game;
