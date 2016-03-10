/*
*	
*/

'use strict';

angular.module('postacularApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])

    .value('flickrURL', 'http://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')

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

    .filter('tidyAuthor', function() {
        return function(input) {
            return input.match(/\((.+?)\)/)[1];
        };
    })

    .filter('htmlToPlaintext', function() {
        return function(text) {
            return String(text).replace(/<[^>]+>/gm, '');
        }
    });