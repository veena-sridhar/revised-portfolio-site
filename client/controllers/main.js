angular.module('portfolio.main', [])

.controller('MainController', function ($scope) {
  var addBubbles = function () {

    //default bubble settings and utility functions
    var bubbleRadius = 20;

    var randomWidth = function () {
      return Math.random() * window.innerWidth;
    };

    var randomTime = function () {
      var time = Math.random() * (9000 - 5000) + 5000;
      return time.toString();
    };

    //for each bubble, animate it, and repeat

    var repeat = function (bubble) {
      var getRandomTime = randomTime();
      bubble
      .attr({
        cx: randomWidth,
        cy: window.innerHeight
      })
      .transition()
      .duration(getRandomTime)
      .ease("linear")
      .attr({
        cx: randomWidth,
        cy: 0 
      })
      .each("end", function () {
        repeat(bubble);
      });
    };


    //add a bubble
    var addSingleBubble = function () {
      var bubble = d3
        .select(".background-wrapper")
        .selectAll("circle")
        .data(d3.range(1))
        .enter()
        .append('circle')
        .attr({
          r: bubbleRadius
        })
        .style ({
          'fill': '#42a5f5',
          'opacity': 0.8
        })
        .on('mouseover', function () {
          d3.select(this).attr({
            r: bubbleRadius * 2
          });
        })
        .on('mouseout', function () {
          d3.select(this)
            .attr({
              r: bubbleRadius
            });
        });
        repeat(bubble);
    };
    addSingleBubble();

    var addSubsequentBubbles = function () {
      var nextBubble = d3
        .select(".background-wrapper")
        .append('circle')
        .attr({
          r: bubbleRadius
        })
        .style ({
          'fill': '#42a5f5',
          'opacity': 0.8
        })
        .on('mouseover', function () {
          d3.select(this).attr({
            r: bubbleRadius * 2
          });
        })
        .on('mouseout', function () {
          d3.select(this)
            .attr({
              r: bubbleRadius
            });
        });
        repeat(nextBubble);
    };

    //repeat said addition of bubble every 1000 ms
   
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun++;
        if(timesRun === 100){
            clearInterval(interval);
        }
        addSubsequentBubbles();
    }, 1000);
    
  };

  $scope.addBubbles = addBubbles;
});

