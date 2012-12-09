Crafty.scene("test2d", function() {
  
  Crafty.background("#000");

	var elements = [
        "src/entities/ray.js",
        "src/levels/box2dTest.js",
        "src/interfaces/info.js",
        "src/audio/sfx.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['box2dtest'] = new boxTest();
	  sc['sfx'] = new SFX();
	  sc['ray'] = new Ray();
		infc['info'] = new Info();
	});

});
