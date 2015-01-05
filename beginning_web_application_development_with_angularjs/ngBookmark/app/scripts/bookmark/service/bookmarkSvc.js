angular.module("ngBookmark.bookmark.service").
        value("mongolabApiKey", "DwXYBnbAx7Q1onbYtIwCTx_LJVXtsfxZ").
        factory("Bookmark", ['$resource', 'mongolabApiKey', function ($resource, mongolabApiKey) {
          var bookmarkResource = $resource('https://api.mongolab.com/api/1/databases/sample/collections/bookmarks/:bookmarkId?apiKey=:apiKey', {
            apiKey: mongolabApiKey
          }, {
            'update': {
              method: 'PUT'
            }
          });

          return bookmarkResource;
        }]);