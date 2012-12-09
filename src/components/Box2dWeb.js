         var   b2Vec2 = Box2D.Common.Math.b2Vec2
            ,  b2AABB = Box2D.Collision.b2AABB
          , b2BodyDef = Box2D.Dynamics.b2BodyDef
          , b2Body = Box2D.Dynamics.b2Body
          , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
          , b2Fixture = Box2D.Dynamics.b2Fixture
          , b2World = Box2D.Dynamics.b2World
          , b2MassData = Box2D.Collision.Shapes.b2MassData
          , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
          , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
          , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
            ,  b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
            ;
         
         var world = new b2World(
               new b2Vec2(0, 10)    //gravity
            ,  true                 //allow sleep
         );
         
         var fixDef = new b2FixtureDef;
         fixDef.density = 1.0;
         fixDef.friction = 0.5;
         fixDef.restitution = 0.2;
        
         var SCALE = 30;
         
         var bodyDef = new b2BodyDef;
         bodyDef.type = b2Body.b2_staticBody;        
                // positions the center of the object (not upper left!)
         bodyDef.position.x = gameContainer.conf.get('width') / 2 / SCALE;
         bodyDef.position.y = gameContainer.conf.get('height') / SCALE;

         fixDef.shape = new b2PolygonShape;
         fixDef.shape.SetAsBox((gameContainer.conf.get('width') / SCALE) / 2, (10/SCALE) / 2);
      
        world.CreateBody(bodyDef).CreateFixture(fixDef);

//        bodyDef.type = b2Body.b2_dynamicBody;
        

        //setup debug draw
        var debugDraw = new b2DebugDraw();
        debugDraw.SetSprite(Crafty.canvas._canvas.getContext('2d'));
        debugDraw.SetDrawScale(SCALE);
        debugDraw.SetFillAlpha(0.3);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    //    world.SetDebugDraw(debugDraw);

        function update() {
             world.Step(
                      1 / 60   //frame-rate
                      ,  10       //velocity iterations
                      ,  10       //position iterations
                                     );
                world.DrawDebugData();
                   world.ClearForces();  
                if ( sc['ray'] != undefined ){
                  sc['ray'].updateFromBox2dWeb();   
                  //sc['ray'].updateToBox2dWeb();
                }   
                           requestAnimFrame(update);

        }; // update()

        window.requestAnimFrame = (function(){
              return  window.requestAnimationFrame       || 
               window.webkitRequestAnimationFrame || 
               window.mozRequestAnimationFrame    || 
               window.oRequestAnimationFrame      || 
               window.msRequestAnimationFrame     || 
               function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60); 

                                                                                                                                                                  };                                                                                                                                                       })();
        requestAnimFrame(update);
