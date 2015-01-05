'use strict';

/**
 * @ngdoc function
 * @name ngBookmarkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngBookmarkApp
 */
angular.module('ngBookmarkApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
