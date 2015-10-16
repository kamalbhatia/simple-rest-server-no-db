// add the app module in this file and not controllers file and then inject the dependencies(if any)
var myApp = angular.module('myApp', [
  'ngRoute',
  'productControllers',
  'ngMessages',
  'ngResource',
  'getDataServices'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/home.html',
    controller: ''
  }).
  when('/About', {
    templateUrl: 'partials/About.html',
    controller: 'ListController'
  }).
  when('/Catalog', {
    templateUrl: 'partials/Catalog.html',
    controller: 'ListController'
  }).
  when('/Contact', {
    templateUrl: 'partials/Contact.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);

myApp.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

