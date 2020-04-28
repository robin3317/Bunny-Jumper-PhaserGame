import Phaser from './lib/phaser.js';
import Game from './scenes/Game.js';

export default new Phaser.Game({
  type: Phaser.AUTO,
  height: 640,
  width: 480,
  scene: Game,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
      debug: true,
    },
  },
});
