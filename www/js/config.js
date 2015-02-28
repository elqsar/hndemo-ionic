'use strict';

(function(){
    angular.module('hndemo')
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                // setup an abstract state for the tabs directive
                .state('tab', {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "templates/tabs.html"
                })

                // Each tab has its own nav history stack:

                .state('tab.top-news', {
                    url: '/top-news',
                    views: {
                        'tab-top-news': {
                            templateUrl: 'templates/topstories/tab-top-news.html',
                            controller: 'TopStoriesController as news'
                        }
                    }
                })

                .state('tab.settings', {
                    url: '/settings',
                    views: {
                        'tab-settings': {
                            templateUrl: 'templates/settings/tab-settings.html',
                            controller: 'SettingsController as settings'
                        }
                    }
                })

                .state('comments', {
                    url: '/comments',
                    templateUrl: 'templates/comments/comments.html',
                    controller: 'CommentsController as comments'
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/top-news');

        });
})();