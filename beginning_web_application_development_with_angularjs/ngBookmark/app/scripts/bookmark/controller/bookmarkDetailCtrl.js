angular.
  module('ngBookmark.bookmark.controller').
  controller('bookmarkDetailCtrl', ['$scope', 'bookmark', '$route', 'Bookmark', '$location', function ($scope, bookmark, $route, Bookmark, $location) {
    $scope.bookmark = bookmark;

    $scope.edit = function () {
      $scope.isEditing = true
    }

    $scope.cancel = function () {
      $route.reload();
    }

    $scope.save = function (bookmark) {
      var updatePromise = Bookmark.update({
        bookmarkId: bookmark["_id"].$oid
      }, bookmark).$promise;

      updatePromise.then(function () {
        $route.reload();
      })
    }

    $scope.delete = function (bookmark) {
      var deletePromise = Bookmark.delete({
        bookmarkId: bookmark["_id"].$oid
      }).$promise

      deletePromise.then(function () {
        $location.url("/bookmarks");
      })
    }
  }])