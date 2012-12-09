Ray = BaseEntity.extend({
	defaults: {
        'speed' : 2,
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Multiway," +
                             "Keyboard, ray, SpriteAnimation, Mouse, Collision, MouseHover, LeftControls, RayAnimations, WiredHitBox");

    	entity
            .attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 100, z: 300})
            .collision(new Crafty.polygon([0,0],[0,47],[39,47],[39,0]))
            .leftControls(model.get('speed'))
            .RayAnimations(model)
            .bind('EnterFrame', function(e){

            })
            .bind('Click', function(){
                
            })
            .setName('ray');

            bodyDef.type = b2Body.b2_dynamicBody;

             fixDef.shape = new b2PolygonShape;
             fixDef.shape.SetAsBox(
                    ( entity.w / 2 ) / SCALE //half width
                  , ( entity.h / 2 ) / SCALE //half height
             );

            bodyDef.position.x = ( (Crafty.viewport.width / 2 ) ) / SCALE;
            bodyDef.position.y = 140 / SCALE;
            var box2Dref = world.CreateBody(bodyDef).CreateFixture(fixDef);

//           for ( var i in box2Drep.m_body.GetPosition()) {
  //             alert ( i );
    //       }
//            entity.attr( { x : box2Dref.m_body.GetPosition().x * SCALE, y : box2Dref.m_body.GetPosition().y * SCALE} );
//            world.SetDebugDraw(debugDraw);
          
      //  entity.x = box2Dref.m_body.GetPosition().x * SCALE ;
       //  entity.y = box2Dref.m_body.GetPosition().y *SCALE ;
            entity.origin(entity.w/2, entity.h/2);
      
    	model.set({'box2Dref' : box2Dref });
    	model.set({'entity' : entity });
    },
    updateFromBox2dWeb: function () {
         var model = this;
         var box2Dref = model.get('box2Dref');
         //alert(box2Dref.m_body.GetPosition().x);
         var entity = model.get('entity');
         entity.x = ( box2Dref.m_body.GetPosition().x * SCALE ) - entity.w/2;
         entity.y = ( box2Dref.m_body.GetPosition().y *SCALE ) - entity.h/2 - 2 ;
         model.set({'entity' : entity });
    },
    updateToBox2dWeb: function (entity) {
         var model = this;
         var box2Dref = model.get('box2Dref');
         //alert(box2Dref.m_body.GetPosition().x);
//         var entity = model.get('entity');
         //alert("aa");
        // for ( var i in box2Dref ) {
        //   alert(i);
         //}
//          box2Dref.m_body.GetPosition().x = entity.x / SCALE;
//          alert(JSON.stringify(box2Dref.m_body.GetPosition()));
//         box2Dref.m_body.GetPosition().y = entity.y / SCALE;
//         entity.x = ( box2Dref.m_body.GetPosition().x * SCALE ) - entity.w/2;
//         entity.y = ( box2Dref.m_body.GetPosition().y *SCALE ) - entity.h/2 - 2 ;
         model.set({'box2Dref' : box2Dref });
         model.set({'entity' : entity });
    }
});
