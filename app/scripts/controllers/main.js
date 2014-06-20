'use strict';

angular.module('mooditor').controller('MainCtrl', function ($scope, localStorageService, fileReader) {

    $scope.editorBox = {};
    $scope.editorBox.editing = false;
    $scope.content = localStorageService.get('content') || 'An h1 header \n============ \n* list 1 \n* list 2';
    $scope.image = localStorageService.get('img') || '';

    $scope.save = function (content) {
        localStorageService.add('content', content);
    };

    $scope.remove = function () {
        localStorageService.remove('content');
    };

    $scope.getFile = function (file) {
        fileReader.readAsDataUrl(file, $scope)
            .then(function (result) {
                $scope.image = result;
                localStorageService.add('img', result);
            });
    };
});