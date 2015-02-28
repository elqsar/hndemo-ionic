'use strict';

// Main module
angular.module('hndemo',
    [
        'ionic',
        'topstories',
        'comments',
        'settings',
        'hndemo.filters'
    ]);

// Top Stories module
angular.module('topstories',
   [
       'topstories.controllers',
       'topstories.services',
       'service.loading'
   ]);

// Comments module
angular.module('comments',
    [
        'comments.controllers'
    ]);

// Settings module
angular.module('settings',
   [
       'settings.controllers'
   ]);
