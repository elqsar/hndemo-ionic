'use strict';

(function(){
    angular.module('settings.controllers', [])
        .controller('SettingsController', SettingsController);

    SettingsController.$inject = [];

    function SettingsController() {
        this.options = [20, 50, 100];
        this.activate();
    }

    SettingsController.prototype.activate = function() {
        var result = parseInt(angular.fromJson(sessionStorage.getItem('hndemo.storyLimit')), 10);
        this.storyLimit = result || this.options[0];
    };

    SettingsController.prototype.setLimit = function() {
        sessionStorage.setItem('hndemo.storyLimit', angular.toJson(this.storyLimit));
    };

})();