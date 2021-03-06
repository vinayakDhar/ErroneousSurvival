Crafty.scene("main", function() {
  
  Crafty.background("#000");

	var elements = [
        "src/entities/player.js",
        "src/entities/banana.js",
        "src/levels/testlevel.js",
        "src/interfaces/info.js",
        "src/audio/sfx.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['test'] = new Test();
	  sc['sfx'] = new SFX();
		sc['player'] = new Player();
		infc['info'] = new Info();
	});

});
