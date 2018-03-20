var app = angular.module('XHackernews',[]);

app.controller('mainctrl', ['$scope', '$http', '$filter', function($scope, $http, $filter){

    $scope.searchText = '';
    $scope.articles = '';
    $scope.customOrderBy = '';

    $http.get("http://starlord.hackerearth.com/hackernews")
    .then(function(response){
        $scope.results = response.data ;
        $scope.articles = $scope.results.splice(1,);
    });

    $scope.orderByMe = function(x){
        if(x == 'l2h'){
            $scope.customOrderBy = 'num_points';
            $scope.reverse = false;
        }
        else if(x == 'h2l'){
            $scope.customOrderBy = 'num_points';
            $scope.reverse = true;
        }
        else if(x == 'o2n'){
            $scope.customOrderBy = 'created_at';
            $scope.reverse = false;
        }
        else if(x == 'n2o'){
            $scope.customOrderBy = 'created_at';
            $scope.reverse = true;
        }
    }
}]);



