SFX = BaseEntity.extend({
	defaults: {
        'repeat' : 1,
        'volume' : 0.1
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.audio;
    	model.set({'entity' : entity });
    },
    stopSfx: function(name){
      var model = this;
      var entity = model.get('entity');
      entity.stop(name);
      return this;
    }, 
    startSfx: function(name){
      var model = this;
      var entity = model.get('entity');
      entity.play(name, model.get('repeat'), model.get('volume'));
      return this;
    },
    startSfx: function(name, repeat, volume){
      var model = this;
      var entity = model.get('entity');
      entity.play(name, repeat, volume);
      return this;
    },
    changeSfx: function(name, source){
       var model = this;
       var entity = model.get('entity');
       entity.stopSfx(name);
       entity.add(name, source);
       entity.startSfx(name);
       return this;
    }
});
