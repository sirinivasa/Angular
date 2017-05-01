/// <reference path="F:\AnjularjsExamples\AngularForm\AngularForm\scripts/angular.js" />
// added new line for check
var app = angular.module('mainapp', []);

app.controller('studentController', function ($scope) {
    $scope.reset = function () {
        $scope.firstName = "Mahesh";
        $scope.lastName = "Parashar";
        $scope.email = "MaheshParashar@tutorialspoint.com";
    }
    $scope.reset();

})
