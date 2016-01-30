app.factory('StoryFactory', function($http) {

    function getStories(successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: '/stories'
        }).then(successCallback, errorCallback);
    }

    function getCodeTemplates(successCallback, errorCallback) {
        $http({
          method: 'GET',
          url: '/code_templates'
        }).then(successCallback, errorCallback);
    }

    return {
        getStories: getStories,
        getCodeTemplates: getCodeTemplates
    }

});