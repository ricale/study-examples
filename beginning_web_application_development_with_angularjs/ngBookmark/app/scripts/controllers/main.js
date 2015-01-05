'use strict';

/**
 * @ngdoc function
 * @name ngBookmarkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngBookmarkApp
 */
angular.module('ngBookmarkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
