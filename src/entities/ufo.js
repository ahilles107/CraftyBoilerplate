Ufo = BaseEntity.extend({
	defaults: {
        'speed' : 2,
    },
    initialize: function(){
    	var model = this;
    	var entity = Crafty.e("2D, "+gameContainer.conf.get('renderType')+", Multiway, Keyboard, ufo, SpriteAnimation, Mouse, Collision, MouseHover");

    	entity
            .attr({x: ((Crafty.viewport.width/2) - (entity.w/2)), y: 0, z: 300})
            .collision(new Crafty.polygon([21,63],[40,55],[59,52],[71,52],[74,39],[83,24],[102,13],[117,13],[119,13],[136,24],[147,37],[151,51],[174,54],[190,58],[195,62],[200,68],[196,78],[180,85],[148,91],[102,92],[70,91],[46,86],[24,80],[17,68],[18,64]))
            .multiway(model.get('speed'), {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
            .bind('EnterFrame', function(e){

            })
            .bind('Click', function(){
                
            })
            .setName('Ufo');

            entity.origin(entity.w/2, entity.h/2);

    	model.set({'entity' : entity });
    }
});