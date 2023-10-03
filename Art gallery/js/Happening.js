var calApp;
calApp = angular.module('calApp', ['ngAnimate'])
calApp.controller('calCtrl',  function($scope, $sce) {
  
  $scope.eventsVisible = 3; // How many events should be shown?
  
  $scope.events = [
    {
      title    : "Australia Day Service",
      date     : 1453786245352,
      location : "Corner Cross and Hocking St West Footscray",
    },
    {
      title    : "BBQ in the park",
      date     : 1456813856559,
      location : "16 Ferdinando Gardens Hampton",
    },
    {
      title    : "Good Friday",
      date     : 1459290634807,
      location : "Flinders St, Melbourne",
    },
    {
      title    : "Family Day",
      date     : 1459290634807,
      location : "Collins St, Melbourne",
    },
    {
      title    : "Concert In Altona",
      date     : 1461990642447,
      location : "Altona Beach",
    }
  ];
  
  $scope.getMap = function(event){
    // Creates a Google Map URL
    return "https://maps.google.com/?q=" + event.location;
  };
    
 $scope.getEvents = function(){
  // Gets x number of events , using scope.eventsVisible 
  // to determine how many events to show
   var events = [];
   for(x = 0; x<$scope.eventsVisible; x++){
     events.push($scope.events[x]);
   }
   return events;
 } 
 
 $scope.hiddenEvents = function(){
   // Calculates how many events are hidden
   var remaining;
   if($scope.events.length - $scope.eventsVisible > 0){
     remaining = $scope.events.length - $scope.eventsVisible;
   } else{
     remaining = 0;
   }
   
   return remaining;
 }
 
 $scope.showHidden = function(){
   // Show hidden events
   $scope.eventsVisible = $scope.events.length;
 }
 $scope.hideEvents = function(){
   // Hide events
   $scope.eventsVisible = 3;
 } 
 gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
  
});


