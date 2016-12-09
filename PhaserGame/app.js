// Declaring variables at the top
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', 
	{preload: preload, create: create, update: update}
	);

var score = 0;

function preload() {
	// load some assets
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create() {
	// define the physics
	game.physics.startSystem(Phaser.Physics.ARCADE);
	// add the sky
	game.add.sprite(0, 0, 'sky');

	// Make group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;

	// Ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	// Player
	player = game.add.sprite(32, 450, 'dude');
		// animate the sprite
		player.animations.add('left', [0,1,2,3], 10, true);
		player.animations.add('right', [5,6,7,8], 10, true);
		game.physics.arcade.enable(player);
		// creating physics for player sprite
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	// Enemy
	enemy1 = game.add.sprite(750, 20, 'baddie');
		// animate the sprite
		enemy1.animations.add('left', [0,1], 10, true);
		enemy1.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy1);
		// creating physics for enemy sprite
		enemy1.body.bounce.y = 0.2;
		enemy1.body.gravity.y = 500;
		enemy1.body.collideWorldBounds = true;

		enemy2 = game.add.sprite(10, 20, 'baddie');
		// animate the sprite
		enemy2.animations.add('left', [0,1], 10, true);
		enemy2.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy2);
		// creating physics for enemy sprite
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 500;
		enemy2.body.collideWorldBounds = true;

		enemy3 = game.add.sprite(200, 20, 'baddie');
		// animate the sprite
		enemy3.animations.add('left', [0,1], 10, true);
		enemy3.animations.add('right', [2,3], 10, true);
		game.physics.arcade.enable(enemy3);
		// creating physics for enemy sprite
		enemy3.body.bounce.y = 0.2;
		enemy3.body.gravity.y = 500;
		enemy3.body.collideWorldBounds = true;

	// Create keyboard events
	cursors = game.input.keyboard.createCursorKeys();

    // Create stars
    stars = game.add.physicsGroup();
    stars.enableBody = true;
    // Create 12 stars evenly spaced
    for (var i = 0; i < 12; i++) {
    	var star = stars.create(i * 70, 0, 'star');
    	star.body.gravity.y  = 200;
    	star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
}

function update() {
	// Player sprite and enemy sprite collides with the platforms
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy1, platforms);
	game.physics.arcade.collide(enemy2, platforms);
	game.physics.arcade.collide(enemy3, platforms);
	// Player sprite does not move if there are no events
	player.body.velocity.x = 0;
	// Keys are pressed, what happens
	if (cursors.left.isDown){
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else {
		player.animations.stop();
		player.frame = 4;
	}
	// Allow player to jump
	if (cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}

  //Enemy AI
  if (enemy1.x > 749){
	enemy1.body.velocity.x = -120;
	enemy1.animations.play('left');
  } else if (enemy1.x < 405){
	enemy1.body.velocity.x = 120;
	enemy1.animations.play('right');
  }

  if (enemy1.x > 200){
	enemy1.body.velocity.x = -80;
	enemy1.animations.play('left');
  } else if (enemy1.x < 20){
	enemy1.body.velocity.x = 80;
	enemy1.animations.play('right');
  } 

  if (enemy1.x > 749){
	enemy1.body.velocity.x = -150;
	enemy1.animations.play('left');
  } else if (enemy1.x < 200){
	enemy1.body.velocity.x = 150;
	enemy1.animations.play('right');
  }

  // Collision with stars
  game.physics.arcade.collide(stars, platforms);
  // Overlap between the player and the stars
  game.physics.arcade.overlap(player, stars, collectStar, null, this);
  // Overlap between the player and enemies
  game.physics.arcade.overlap(player, enemy1, loseLife, null, this);
  game.physics.arcade.overlap(player, enemy2, loseLife2, null, this);
  game.physics.arcade.overlap(player, enemy3, loseLife, null, this);

}

  // Define collectStar
  function collectStar (player, star) {
  	// Remove star
  	star.kill();
  	// Increase the score
  	score = score + 1;
  	//Create a new star
  	star = stars.craete(Math.floor(Math.random() * 750), 0, 'star');
    star.body.y = 200;
    star.body.bounce.y = Math.random() * 0.99;
  }

    // Define loselife
    function loselife (player, enemy) {
    	// Remove enemy, decrease score and reset
    	enemy.kill();
    	score = score - 1;
    	enemy.reset(750, 20);
    }

    // Define loselife2
    function loselife (player, enemy) {
    	// Remove enemy, decrease score and reset
    	enemy.kill();
    	score = score - 1;
    	enemy.reset(10, 20);
    }
