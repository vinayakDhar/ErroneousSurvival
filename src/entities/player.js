Player = BaseEntity.extend({
	defaults: {
        'speed' : 2,
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Multiway," +
                             "Keyboard, player, SpriteAnimation, Mouse, Collision, MouseHover, LeftControls, Animations, LeftActionControls");

    	entity
            .attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 0, z: 300})
            .collision(new Crafty.polygon([0,0],[0,16],[16,16],[16,0]))
            .leftControls(model.get('speed'))
            .leftActions()
            .Animations()
            .bind('EnterFrame', function(e){

            })
            .bind('Click', function(){
                
            })
            .setName('player');

            entity.origin(entity.w/2, entity.h/2);

    	model.set({'entity' : entity });
    }
});
