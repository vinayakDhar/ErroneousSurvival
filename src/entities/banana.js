Banana = BaseEntity.extend({
	defaults: {
        'speed' : 6,
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Multiway," +
                          " banana, SpriteAnimation, Mouse, Collision, MouseHover, bananaAnimations");

    	entity
            .attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 100, z: 300})
            .collision(new Crafty.polygon([0,0],[0,16],[16,16],[16,0]))
            .bananaAnimations()
            .bind('EnterFrame', function(e){

            })


            entity.origin(entity.w/2, entity.h/2);

    	model.set({'entity' : entity });
    }

});
