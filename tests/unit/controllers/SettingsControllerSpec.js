'use strict';

describe('SettingsControllerSpec', function(){
    var controller;

    beforeEach(function(){
        module('settings.controllers');
        inject(function($controller){
            controller = $controller('SettingsController', {});
        });
    });

    afterEach(function(){
       sessionStorage.clear();
    });

    it('default limit for stories is 20', function(){
        controller.activate();
        expect(controller.storyLimit).toBe(20);
    });

    it('should set up new limit and save to sessionStorage', function(){
        controller.storyLimit = {limit: 100};
        controller.setLimit();

        expect(sessionStorage.length).toBe(1);
    });
});