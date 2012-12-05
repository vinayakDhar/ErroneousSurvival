Test = BaseEntity.extend({
    initialize: function(){
    	var model = this;
      
      var width = gameContainer.conf.get('width');
      var height = gameContainer.conf.get('height');
      
      for (var i = 0; i < height/16; i++) {
         var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Multiway," +
                                   " banana, SpriteAnimation, Mouse, Collision, MouseHover, bananaAnimations")
                                   .attr({x: ((Crafty.viewport.width/2) + (Crafty.math.randomInt(-200, 200))), y: i * 20, z: 300})
                                   .collision(new Crafty.polygon([0,0],[0,16],[16,16],[16,0]))
                                   .bananaAnimations();

        for (var j = 0; j < width/16; j++) {
          Crafty.e("2D,"+gameContainer.conf.get('renderType')+", grass" + Crafty.math.randomInt(1, 4)).attr({ x: i * 16, y: j * 16, z:1 });
          
          }
      }
    }
});
