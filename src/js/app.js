/*
*	app.js for initializing angular module container.
*   Defining routes, value and rootscope.
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
    
.value('URL', 'http://jsonplaceholder.typicode.com/posts/')
.constant('appConstants', {
        SERVICE_ERROR : "Service is temporarily unavailable. Please try after sometime.",
        SUCCESS_MSG : "Congrajulations ! Your post has been added successfully."
})
.run(['$rootScope', function(rootScope){
    rootScope.subHeading = "An AngularJS framework based web application to add and bring back some posts from any API.";
}]);

