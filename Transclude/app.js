var myApp = angular.module('myApp', ['ngRoute']);

// pulls up second page within ng-view on html based on fragment identifier 
myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })
    
    // .when('/second', {
    //     templateUrl: 'second.html',
    //     controller: 'secondController'
    // })
    
    // .when('/second/:num', {
    //     templateUrl: 'second.html',
    //     controller: 'secondController'
    // })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    // build out array of people
    $scope.people = [
        {
        name: 'Josh Lane',
        address: '222 First St.',
        city: 'New York',
        state: 'NY',
        zip: '88444'
        },
        {
        name: 'Bosh Bane',
        address: '453 Lindon St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '55222'
        },
        {
        name: 'George Doe',
        address: '156 Franklin St.',
        city: 'Pittsburgh',
        state: 'PA',
        zip: '33444'
        }
    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
        
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formattedAddressFunction: "&"
       },
       transclude: true
   }
});
