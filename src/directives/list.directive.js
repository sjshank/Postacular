'use strict';

angular.module('postacularApp')

.directive('postList', function() {
    return {
        restrict: 'E',
        scope: {
            postId: '@',
            postTitle: '@',
            postBody: '@'
        },
        link: function(scope, element, attrs, ctrl) {

        },
        templateUrl: 'views/list.html'
    }
});