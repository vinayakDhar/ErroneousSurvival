Info = BaseEntity.extend({
	defaults: {
        'text' : "W A S D TEST",
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, DOM, Text");

    	entity
            .attr({x: 50, y: 150, z: 1000, w: 400})
            .text(model.get('text'))
            .textColor('#FFF')
            .textFont({'size' : '24px', 'family': 'Arial'})
            .bind('Click', function(){
                                
            })

    	model.set({'entity' : entity });
    }
});
