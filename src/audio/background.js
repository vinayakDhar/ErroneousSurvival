BackgroundScore = BaseEntity.extend({
	defaults: {
        'frames' : 0,
        'volume' : 0.02
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.audio;
      entity.play('background', model.get('frames'), model.get('volume'));
    	model.set({'entity' : entity });
    },
    stopTrack: function(){
      var model = this;
      var entity = model.get('entity');
      entity.stop();
      return this;
    },
    startTrack: function(){
      var model = this;
      var entity = model.get('entity');
      entity.play('background', model.get('frames'), model.get('volume'));
      return this;
    },
    changeTrack: function(source){
       var model = this;
       var entity = model.get('entity');
       entity.stopTrack();
       entity.add('background', source);
       entity.startTrack();
       return this;
    }
});
