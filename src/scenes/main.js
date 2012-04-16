Crafty.scene("main", function() {

	var elements = [
        "src/entities/ufo.js",
        "src/interfaces/info.js"
	];
	
	//when everything is loaded, run the main scene
	require(elements, function() {	   
		sc['ufo'] = new Ufo();
		infc['info'] = new Info();
	});

});
