Crafty.scene("main", function() {
  
  Crafty.background("#000");

	var elements = [
        "src/entities/player.js",
        "src/entities/banana.js",
        "src/levels/testlevel.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['test'] = new Test();
	//	sc['banana'] = new Banana();
		sc['player'] = new Player();
		infc['info'] = new Info();
	});

});
