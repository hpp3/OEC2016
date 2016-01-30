app.factory('StoryFactory', function($http) {

    function getStories(successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: '/stories'
        }).then(successCallback, errorCallback);
    }

    return {
        getStories: getStories
    }

});