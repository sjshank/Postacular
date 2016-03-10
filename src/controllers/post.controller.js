'use strict';

angular.module('postacularApp')

    .controller('PostListCtrl', ['$scope', 'postAPI', function($scope, postAPI) {
        var me = this;
        me.list = [];

        (function() {
            postAPI.search().then( function(data) {
                me.list = data.items;
            });
        })();

    }])

    .controller('PostAddCtrl', ['$scope', 'postAPI', function($scope, postAPI) {

        var me = this;
    }]);