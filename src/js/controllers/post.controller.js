'use strict';

angular.module('postacularApp')

    .controller('PostListCtrl', ['$scope', 'postAPI', 'appConstants', function($scope, postAPI, constants) {
        $scope.hasError = false;
        $scope.list = [];

        (function() {
            postAPI.getPosts().then( function(data) {
                if(data){
                    $scope.hasError = false;
                    $scope.list = data;
                }else{
                    $scope.hasError = true;
                    $scope.errorMsg = constants.SERVICE_ERROR;
                }
            });
        })();
    }])

    .controller('PostAddCtrl', ['$scope', 'postAPI', 'appConstants', function($scope, postAPI, constants) {
        $scope.hasError = false;
        $scope.success = false;
        $scope.post = {
            title : "",
            comment : ""
        };
       $scope.addPost = function() {
            postAPI.addPost($scope.post).then( function(data) {
                if(data){
                    $scope.success = true;
                    $scope.hasError = false;
                    $scope.successMsg = constants.SUCCESS_MSG;
                }else{
                    $scope.hasError = true;
                    $scope.success = false;
                    $scope.errorMsg = constants.SERVICE_ERROR;
                }
            });
        };
        
    }]);