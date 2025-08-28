// app.js
angular.module('homeApp', [])
  .controller('HomeController', ['$scope', '$window', function($scope, $window) {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    $scope.user = loggedInUser || null;

    $scope.logout = function() {
      localStorage.removeItem('loggedInUser');
      $window.location.href = 'auth.html';
    };

    $scope.isActive = function(page) {
      return window.location.href.includes(page);
    };
  }])
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'navbar.html',
      controller: 'HomeController'
    };
  });
