'use strict';

(function(){
    angular.module('topstories.controllers', [])
        .controller('TopStoriesController', TopStoriesController);

    TopStoriesController.$inject = ['$location', 'TopStories', 'LoadingService'];

    function TopStoriesController($location, TopStories, LoadingService) {
        this.TopStories = TopStories;
        this.LoadingService = LoadingService;
        this.$location = $location;

        this.stories = [];

        this.activate();
    }

    TopStoriesController.prototype.activate = function() {
        var self = this;
        self.LoadingService.showLoading();
        self.TopStories.topStories()
            .then(function (response) {
                self.topStoryIds(response)
            })
            .finally(function(){
                self.LoadingService.hideLoading();
            });
    };

    TopStoriesController.prototype.topStoryIds = function(response) {
        response.map(function (storyId) {
            this.storyById(storyId);
        }.bind(this));
    };

    TopStoriesController.prototype.storyById = function(storyId) {
        this.TopStories.storyById(storyId).then(function (response) {
            this.stories.push(response);
        }.bind(this));
    };

    TopStoriesController.prototype.openStory = function(url) {
        url && window.open(url, "_system");
    };

    TopStoriesController.prototype.openComments = function(story) {
        this.$location.path('/comments');
    };
})();