// start slingin' some d3 here.




var initGame = {
	height:450,
	width:700,
	nEnemies: 20,
	padding: 20
	};

var gameScores = {
	score: 0,
	highScore: 0,
	collisions: 0
};

var axes = {
	x: d3.scale.linear().domain([0,100]).range([0, initGame.width]),
	y: d3.scale.linear().domain([0,100]).range([0, initGame.height])
};


var svg = d3.select('body').append('svg')
	  .attr('width', initGame.width)
	  .attr('height', initGame.height);



var createEnemies = function(){
  var tempEnemies = [];

  for (var i=0; i<initGame.nEnemies; i++){
	 
	  var tempBad = {
		  "id": i,
		  "x": Math.random()*(initGame.width-10),
		  "y": Math.random()*(initGame.height -10)
	    };

		tempEnemies.push(tempBad);

	};
  return tempEnemies;
};

var enemy_data= createEnemies();

var enemies = d3.select('svg')
  .selectAll('circle')
  .data(enemy_data)
	.enter()                                //function needs to move info from enemy object
	.append('circle')																//into html x: y: and id. })    //may need anonymouse function back
	  .attr('class', 'enemy')
	  .attr('cx', function(d){return d.x;})
	  .attr('cy', function(d){return d.y;})
	  .attr('r', 10);









	   //  var square = svg.append("rect")
    // .attr("height", 100)
    // .attr("width", 100)
    // .attr("x", 10)
    // .attr("y", 10)
    // .attr("fill", "green")
    // .on("mousedown", mouseDown)
    // .on("mouseup", mouseUp)
    // .on("click", mouseClick);

var player = d3.select('svg')
  .selectAll('rect')
	.enter()                                //function needs to move info from enemy object
	.append('rect')																//into html x: y: and id. })    //may need anonymouse function back
	  .attr('class', 'player')
	  .attr('height', 100)
	  .attr('width', 100)
	  .attr('cx', initGame.width/2)
	  .attr('cy', initGame.height/2)
	  .attr('fill', "orange")
	  .on("mouseup", mouseUp)
	  .on("mousedown", mouseDown)
	  .on("click", mouseClick)



var update = function(data){




}
