/**
    examples:             
    'sprites_name' : {
         'file' : 'path/to/file',
         'tile' : width,
         'tileh' : height,
         'elements': {
             'sprite_name' : [0, 0]
         }
    },
*/

Sprites = Backbone.Model.extend({
    defaults: {
        images:{
            'bananaBomber' : {
                 'file' : 'web/images/bananabomber-sprites.png',
                 'tile' : 16,
                 'tileh' : 16,
                 'elements': {
                     'player' : [0, 3],
                     'grass1' : [0, 0],
                     'grass2' : [1, 0],
                     'grass3' : [2, 0],
                     'grass4' : [3, 0],
                     'banana' : [4, 0]
                 }
            },
            'tiles' : {
                 'file' : 'web/images/tiles.png',
                 'tile' : 32,
                 'tileh' : 32,
                 'elements': {
                     'metalfloor2d' : [0, 0],
                     'metalwall2d' : [0, 1],
                     'background2d' : [0, 10]
                 }
            },
            'rayRun' : {
                 'file' : 'web/images/rayRun.png',
                 'tile' : 39,
                 'tileh' : 43,
                 'elements': {
                     'ray' : [0, 0]
                 }
            },
            'isoRoad' : {
                 'file' : 'web/images/png/road.png',
                 'tile' : 100,
                 'tileh' : 65,
                 'elements': {
                     'isoroad' : [0, 0]
                 }
            }
        }
    },
    initialize: function(){
        
    },
    /**
     * Create Crafty sprites from images object
     * Pass key if You want create only one choosen sprite.
     * 
     * @param  string key - sprite definition key
     */
    create: function(key){
        if(key != undefined){
            element = this.get('images')[key];
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
    		
            return true;
        };

        _.each(this.get('images'), function(element, k){ 
            if(element['tileh'] == undefined)
                Crafty.sprite(element['tile'], element['file'], element['elements']);
            else
                Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        });

    },
    /**
     * Get path for sprites files - for loading
     * 
     * @return array array of files paths
     */
    getPaths: function(){
        var array = [], i=0;
        _.each(this.get('images'), function(element, key){ 
            array[i] = element['file']
            i++;
        });

        return array;
    }
});
