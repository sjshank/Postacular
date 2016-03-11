/*
*   Service for calling GET/POST call to typicode API URL
*
*/

'use strict';
angular.module('postacularApp')
    .factory('postAPI', ['$q', '$http', 'URL', function($q, $http, url) {
        
        return new function() {
            this.getPosts = function() {
                var deferred = $q.defer();
                $http.get(url).
                    success(function(data, status, headers, config) {
                        deferred.resolve(data);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject([data, status, headers, config]);
                    });
                return deferred.promise;
            };
            
            this.addPost = function(data){
                var config = {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                    }
                };
                var deferred = $q.defer();
                $http.post(url, data, config).
                    success(function(data, status, headers, config) {
                        deferred.resolve(data);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject([data, status, headers, config]);
                    });
                return deferred.promise;
            };
        };
    }]);