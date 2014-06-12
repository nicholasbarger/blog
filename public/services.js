nb.factory('blogFactory', ['$http', '$q', function($http, $q) {
    return {
      getCollection: getCollection,
      getSingle: getSingle,
      save: save
    };

    function getCollection() {
      var deferred = $q.defer();
      $http.get('/posts')
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });

      return deferred.promise;
    }

    function getSingle(link) {
      var deferred = $q.defer();
      $http.get('/posts/' + link)
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });

      return deferred.promise;
    }

    function save(post) {
      var deferred = $q.defer();
      $http.post('/posts/' + ripple._id, ripple)
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });

      return deferred.promise;
    }
  }]);