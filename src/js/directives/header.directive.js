'use strict';

angular.module('postacularApp')

.directive('postHeader', function() {
    return {
        restrict: 'E',
        scope: {
            selected: '@'
        },
        link: function(scope, element, attrs) {

        },
        templateUrl: 'views/header.tpl.html'
    }
});