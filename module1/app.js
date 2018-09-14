(function() {
  "use strict"

  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.message = "";

    $scope.checkIfTooMuch = function() {
      if (!$scope.lunchInput) {
        $scope.message = "Please enter data first";
        return;
      }

      var lunchList = $scope.lunchInput.toString().split(',');

      if (lunchList.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  }
})();
