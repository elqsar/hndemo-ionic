'use strict';

describe('UrlFilterSpec', function(){
    var filter;
    beforeEach(function(){
        module('hndemo.filters');

        inject(function($filter){
            filter = $filter('UrlFilter');
        });
    });

    it('should remove http', function(){
        expect(filter('http://goodsite.com/info/more')).toBe('goodsite.com');
    });

    it('should remove https', function(){
        expect(filter('https://goodsite.com/info/1')).toBe('goodsite.com');
    });
});