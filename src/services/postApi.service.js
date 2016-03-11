'use strict';
angular.module('postacularApp')
    .factory('postAPI', ['$q', '$http', 'postListURL', 'addPostURL', function($q, $http, listURL, addURL) {
        return new function() {
            this.getPosts = function() {
                var deferred = $q.defer();
                $http.get(listURL).
                    success(function(data, status, headers, config) {
                        deferred.resolve(data);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject([data, status, headers, config]);
                    });
                return deferred.promise;
            };
            
            this.addPost = function(){
                var deferred = $q.defer();
                $http.post(addURL).
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