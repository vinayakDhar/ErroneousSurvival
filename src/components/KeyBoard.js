Crafty.c("LeftControls", {
      init: function() {
         this.requires('Multiway');
       },
      leftControls: function(speed) {
         this.multiway(speed, {W: -90, S: 90, D: 0, A: 180})
         return this;
      }                                                    
});


Crafty.c("LeftActionControls", {
      init: function() {
       },
      leftActions: function() {
         this.bind('KeyDown', function(e) {
              if(e.key == Crafty.keys.SPACE) {
                 // Do SOmething 
               }
         });
         return this;
      }                                                    
});

