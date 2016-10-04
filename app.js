(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
  function LunchController($scope) {
    $scope.lunchList = "";

    $scope.analyse = function(){
    var re = /\s*,\s*/;
    $scope.lunchArray = $scope.lunchList.split(re);
    $scope.servings = $scope.lunchArray.length;
    }
    $scope.sayMessage = function () {
      if ($scope.lunchList == ""){
      return "please enter data first";
      }
      else if ($scope.servings <= 3) {
      return "Enjoy!";
      }
      else if ($scope.servings > 3) {
      return "Too Much!"
      }
    }

  }

})();
