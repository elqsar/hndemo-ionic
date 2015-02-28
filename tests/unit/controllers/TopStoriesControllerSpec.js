'use strict';

describe('TopStoriesControllerSpec', function(){
    var window,
        controller,
        mockLoading,
        mockTopStories;

    beforeEach(function(){
        module('hndemo');
        module(function($provide){
            $provide.factory('LoadingService', function($ionicLoading){
                return {
                    showLoading: jasmine.createSpy('showLoading').and.callFake(function(){}),
                    hideLoading: jasmine.createSpy('hideLoading').and.callFake(function(){})
                };
            });
            $provide.factory('TopStories', function($q){
                var topStories = jasmine.createSpy('topStories').and.callFake(function(){
                    var result = [];
                    return $q.when(result);
                });
                var storyById = jasmine.createSpy('storyById').and.callFake(function(){
                    var result = {};
                    return $q.when(result);
                });
                return {
                    topStories: topStories,
                    storyById: storyById
                };
            });
        });
        inject(function($controller, TopStories, LoadingService){
            mockTopStories = TopStories;
            mockLoading = LoadingService;
            controller = $controller('TopStoriesController', {
                TopStories: mockTopStories,
                LoadingService: mockLoading
            });
        });
    });

    it('should show loading dialog and call topStories', function(){
        controller.activate();

        expect(mockLoading.showLoading).toHaveBeenCalled();
        expect(mockTopStories.topStories).toHaveBeenCalled();
    });

    it('should get top stories and call storyById', function(){
        spyOn(controller, 'storyById').and.callThrough();
        controller.topStoryIds([{id: 1}, {id: 2}]);

        expect(controller.storyById.calls.count()).toEqual(2);
        expect(controller.storyById).toHaveBeenCalledWith({id: 1});
        expect(controller.storyById).toHaveBeenCalledWith({id: 2});
    });

    it('should get story by id', function(){
        controller.storyById(1);

        expect(mockTopStories.storyById.calls.count()).toEqual(1);
        expect(mockTopStories.storyById).toHaveBeenCalledWith(1);
    });

});
