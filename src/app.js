/*
*	
*/

'use strict';

angular.module('postacularApp', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'views/home.html'
            })
            .when('/post/list', {
                controller:'PostListCtrl',
                templateUrl:'views/list.html'
            })
            .when('/post/add', {
                controller:'PostAddCtrl',
                templateUrl:'views/addPost.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    }])
    
.value('postListURL', 'http://jsonplaceholder.typicode.com/posts/')
.value('addPostURL', '')
.run(['$rootScope', function(rootScope){
    rootScope.subHeading = "An AngularJS framework based web application to add and bring back some posts from any API.";
}]);

