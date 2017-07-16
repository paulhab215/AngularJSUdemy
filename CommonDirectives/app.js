var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.name = '';
    
    $scope.lowercasename = function() {
        return $filter('lowercase')($scope.name);
    };
    
    $scope.characters = 6;
    
    $scope.rules = [
      
        { ruledesc: "Must be six characters" },
        { ruledesc: "Must not be long" },
        { ruledesc: "Must be interesting" }
        
    ];
        
}]);
