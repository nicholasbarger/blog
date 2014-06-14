nb.factory('blogFactory', ['$http', '$q', function($http, $q) {
    return {
      getCollection: getCollection,
      getLatest: getLatest,
      getSingle: getSingle,
      save: save
    };

    function getCollection() {
      var deferred = $q.defer();
      $http.get('/api/posts')
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });

      return deferred.promise;
    }

    function getLatest() {
      var deferred = $q.defer();
      $http.get('/api/posts/latest')
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
      $http.get('/api/posts/' + link)
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
      $http.post('/api/posts/' + ripple._id, ripple)
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });

      return deferred.promise;
    }
  }]);