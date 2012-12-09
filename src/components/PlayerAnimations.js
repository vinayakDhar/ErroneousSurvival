Crafty.c('bananaAnimations', {
    bananaAnimations : function() {
        this.onHit("player", function() {
           sc['sfx'].startSfx('banana', 1, 0.1);
           this.destroy();
           //sc['sfx'].stopSfx('banana');
        });
       return this;
    }
});

Crafty.c('Animations', {
    Animations: function() {
            //setup animations
            this.requires("SpriteAnimation, Collision, Grid")
            .animate("walk_left", 6, 3, 8)
            .animate("walk_right", 9, 3, 11)
            .animate("walk_up", 3, 3, 5)
            .animate("walk_down", 0, 3, 2)
	    .bind("NewDirection",
		function (direction) {
	      if (direction.x < 0) {
		      if (!this.isPlaying("walk_left"))
        		this.stop().animate("walk_left", 10, -1);
	      }
	        if (direction.x > 0) {
		        if (!this.isPlaying("walk_right"))
        		this.stop().animate("walk_right", 10, -1);
	      }
	        if (direction.y < 0) {
		        if (!this.isPlaying("walk_up"))
        		this.stop().animate("walk_up", 10, -1);
	      }
	        if (direction.y > 0) {
		        if (!this.isPlaying("walk_down"))
        		this.stop().animate("walk_down", 10, -1);
	          }
	        if(!direction.x && !direction.y) {
		        this.stop();
	        }
	    })
	    .bind('Moved', function(from) {
	  	   if(this.hit('solid')){
		      this.attr({x: from.x, y:from.y});
	   	   }
	    })
     return this;
	} 
});


Crafty.c('RayAnimations', {
  left: function(player_fixture) { this.move( -10, 0, player_fixture); },
  right: function(player_fixture) { this.move( 10, 0, player_fixture); },
  up: function(player_fixture) { this.move(0, -20, player_fixture); },
  move: function(x, y, player_fixture) {
      var b2Vec2 = Box2D.Common.Math.b2Vec2
          , body = player_fixture.GetBody()
              , method = (y>0) ? 'ApplyForce' : 'ApplyImpulse';
                body[method](
                    new b2Vec2(x, y),
                    body.GetWorldCenter()
                );
  },
    RayAnimations: function( model ) {
            //setup animations
            this.requires("SpriteAnimation, Collision, Grid")
            .animate("run_right", 0, 0, 4)
            .animate("run_left", 0, 0, 4)
	    .bind("NewDirection",
		function (direction) {
	      if (direction.x < 0) {
		      if (!this.isPlaying("run_left"))
        		this.stop().animate("run_left", 30, -1).flip("X");
            this.left(model.get('box2Dref'));
//              for ( var i in model.get('box2Dref') )
  //              { alert(i); }
	      }
	        if (direction.x > 0) {
		        if (!this.isPlaying("run_right"))
        		this.stop().animate("run_right", 30, -1).unflip("X");
            this.right(model.get('box2Dref'));
	      }

	      if (direction.y < 0) {
          this.up(model.get('box2Dref'));
	      }

	        if(!direction.x && !direction.y) {
		        this.stop();
	        }
	    })
	    .bind('Moved', function(from) {
	  	   if(this.hit('solid')){
		      this.attr({x: from.x, y:from.y});
	   	   }
       //  model.updateToBox2dWeb(this);
	    })
     return this;
	} 
});

