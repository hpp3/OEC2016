var app = angular.module('oecApp', []);

app.controller('MainController', function() {

    var mainController = this;
    this.totalLessons = 10;
    this.currentLesson = 0;
    this.lessonEnabled = 0; // index if the highest lesson enabled

    this.getNumber = function(num) {
        return new Array(num);
    };

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
        }
    };

    this.goToNextLesson = function() {
        if (this.canGoToNextLesson()) {
            this.currentLesson += 1;
        }
    };

    this.goToPrevLesson = function() {
        if (this.canGoToPrevLesson()) {
            this.currentLesson -= 1;
        }
    };

    this.enableNextLesson = function() {
        this.lessonEnabled += 1;
    };

});