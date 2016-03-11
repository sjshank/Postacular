'use strict';

angular.module('postacularApp')

.directive('postList', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/post.tpl.html',
        scope: {
            title: '@',
            body: '@'
        },
        link: function(scope, element, attrs, ctrl) {
            console.log("inside directive");
        }
    }
});