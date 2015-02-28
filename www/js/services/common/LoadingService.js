'use strict';

(function(){
    angular.module('service.loading', [])
        .factory('LoadingService', LoadingService);

    LoadingService.$inject = ['$ionicLoading'];

    function LoadingService($ionicLoading) {
        var loadingMessage = 'Loading...';
        return {
            showLoading: function() {
                $ionicLoading.show({
                    template: loadingMessage
                });
            },
            hideLoading: function() {
                $ionicLoading.hide();
            }
        };
    }
})();