var app = angular.module('oecApp', []);

app.controller('MainController', function(StoryFactory, $sce) {

    var mainController = this;
    this.stories = [];
    this.totalLessons = 0;
    this.currentLesson = 0;
    this.lessonEnabled = 0; // index if the highest lesson enabled

    StoryFactory.getStories(function (res) {
        _.each(res.data, function (story, i) {
           res.data[i] = $sce.trustAsHtml(story);
        });
        mainController.stories = res.data;
        mainController.totalLessons = mainController.stories.length;
    }, function(res) {
        console.log(res);
    });

    this.canGoToNextLesson = function() {
        var nextLesson = this.currentLesson + 1;
        return nextLesson < this.totalLessons && nextLesson <= this.lessonEnabled;
    };

    this.canGoToPrevLesson = function() {
        return this.currentLesson > 0;
    };

    this.canGoToLesson = function(lessonIndex) {
        return lessonIndex <= this.lessonEnabled;
    };

    this.getLessonCSSClass = function(lessonIndex) {
        if (!this.canGoToLesson(lessonIndex)) {
            return 'disabled';
        }

        if (lessonIndex == this.currentLesson) {
            return 'active';
        }

        return '';
    };

    this.goToLesson = function(lessonIndex) {
        if (this.canGoToLesson(lessonIndex)) {
            this.currentLesson = lessonIndex;
            $('#eval-code-results').html('');
        }
    };

    this.goToNextLesson = function() {
        if (this.canGoToNextLesson()) {
            this.currentLesson += 1;
            $('#eval-code-results').html('');
        }
    };

    this.goToPrevLesson = function() {
        if (this.canGoToPrevLesson()) {
            this.currentLesson -= 1;
            $('#eval-code-results').html('');
        }
    };

    this.enableNextLesson = function() {
        this.lessonEnabled += 1;
    };

    this.continueLesson = function() {
        this.enableNextLesson();
        this.goToNextLesson();
    };

    this.parse = parse;
});