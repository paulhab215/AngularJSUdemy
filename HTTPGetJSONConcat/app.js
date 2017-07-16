var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 6;

    // get the reuirments from xml in same folder called name.reqs.json
    $http.get('/HTTPGetPost/name.reqs.json')
     .then(function (response) {        // use then - success was depricated in 1.6
        console.log(response);

        var data = response.data;
        console.log(data);

        var status = response.status;
        console.log(status);

        if(status == 200){
            $scope.rules = response.data;
        }else{
            var statusText = response.statusText;
            console.log(statusText);
        }
    });
    //function to add rule called from button ng-click
    $scope.newRule = '';
    $scope.addRule = function () {
        $http.post('/HTTPGetPost/name.reqs.json', { newRule: $scope.newRule }) //post to json url
             .then(function (response) {  

                var status = response.status;
                console.log(status);
                
                if(status == 200){
                    $scope.rules = response.data;
                $scope.newRule = '';
                }else{
                    console.log(response);
                }
            });
    };
}]);