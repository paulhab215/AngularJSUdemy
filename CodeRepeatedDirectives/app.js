var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'main.html',
        controller: 'mainController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
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
    
    $scope.formatAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
    };
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'searchresult.html',
       replace: true,
       scope: {
           personObject: "=",
           formatAddressFunction: "&"
       }
   }
});
