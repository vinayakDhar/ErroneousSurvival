boxTest = BaseEntity.extend({
    initialize: function(){
    	var model = this;
      Crafty.background("#FFF");
     
      
      var width = gameContainer.conf.get('width');
      var height = gameContainer.conf.get('height');
      
      for (var i = 0; i < height/16; i++) {
 //       var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+
   //                                 ", metalfloor2d, SpriteAnimation, Mouse, Collision, MouseHover")
     //                                 .attr({x: i * 32, y: height/32 * 16, z: 300})
       //                               .collision(new Crafty.polygon([0,0],[0,32],[32,32],[32,0]));

        for (var j = 0; j < width/16; j++) {
//            Crafty.e("2D,"+gameContainer.conf.get('renderType')+", background2d").attr({ x: i * 16, y: j * 16, z:1 });
          }
      }
    }
});
