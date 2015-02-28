'use strict';

(function(){
    angular.module('topstories.services', [])
        .factory('TopStories', TopStories);

    TopStories.$inject = ['$q', 'API_BASE'];

    function TopStories($q, API_BASE) {

        return {
            topStories: topStories,
            storyById: storyById
        };

        function topStories() {
            var url = API_BASE + 'topstories';
            var firebase = new Firebase(url);
            return createPromise(firebase);
        }

        function storyById(storyId) {
            var url = API_BASE + 'item/';
            var firebase = new Firebase(url + storyId);
            return createPromise(firebase);
        }

        function createPromise(firebase) {
            var defer = $q.defer();
            firebase.once('value', function(response){
                defer.resolve(response.val());
            });
            return defer.promise;
        }
    }
})();