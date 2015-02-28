'use strict';

(function(){
    angular.module('hndemo.filters', [])
        .filter('UrlFilter', UrlFilter);

    function UrlFilter() {
        return function(url) {
            if(url && angular.isString(url)) {
                url = url.replace(/^https?:\/\//,'');
                var slashPosition = url.indexOf('/');
                return slashPosition ? url.substring(0, slashPosition) : url;
            }
        }
    }
})();