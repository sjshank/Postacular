'use strict';

angular.module('postacularApp')

    .controller('PostListCtrl', ['$scope', 'postAPI', function($scope, postAPI) {
        $scope.list = [];

        $scope.getPosts = function() {
            postAPI.getPosts().then( function(data) {
                $scope.list = data;
            });
        };
        
        $scope.getPosts();
    }])

    .controller('PostAddCtrl', ['$scope', 'postAPI', function($scope, postAPI) {

        var me = this;
    }]);