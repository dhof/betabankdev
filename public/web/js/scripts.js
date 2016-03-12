var app=angular.module("betaBankApp",["ngRoute"]);app.config(["$routeProvider",function(o){o.when("/",{templateUrl:"/html/home.html",controller:"homeControl"}).when("/profile",{templateUrl:"/html/userprofile.html",controller:"profileControl"}).when("/map",{templateUrl:"/html/map.html",controller:"mapControl"})}]),app.controller("homeControl",["$scope","$http",function(o,e){console.log("home control")}]),app.controller("profileControl",["$scope","$http",function(o,e){console.log("profile control"),e.get("/api/users/").then(function(e){e.data.user?(o.user=e.data.user,console.log(o.user)):window.location.href="/"}),o.showMe=function(){console.log(o.user)}}]),angular.module("betaBankApp").controller("mapControl",["$scope","mapFactory",function(o,e){console.log("map control");var t=[],n=e.map(),a=function(o,e){var t=n.getBounds().getNorthEast(),a=n.getBounds().getSouthWest(),r=n.getProjection(),l=r.fromLatLngToPoint(t),p=r.fromLatLngToPoint(a),c=1<<n.getZoom(),m=r.fromPointToLatLng(new google.maps.Point(o/c+p.x,e/c+l.y));return m};o.createMarker=function(e){if(o.addNewLocation===!0){var r=e.clientX,l=e.clientY,p=a(r,l),c=new google.maps.Marker({position:p,map:n,name:o.newLocationName});t.push(c),console.log(t),o.addNewLocation=!1,o.newLocationName=""}},o.addNewLocation=!1,o.newLocationName}]),angular.module("betaBankApp").factory("mapFactory",[function(){var o=window.mapInit=function(){var o=document.getElementById("map"),e=new google.maps.Map(o,{center:{lat:40.0169753,lng:-105.2222925},zoom:12});return e};return{map:o}}]);