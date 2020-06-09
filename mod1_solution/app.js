(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.lunchItems = "";
$scope.message = "";
$scope.sayMessage = function(value) {
  if(value === "")
  {$scope.message = "Please enter data first";}
  else {
   value = value.split(',');
  if(value.length <= 3) {
  $scope.message = "Enjoy!";
} else {
  $scope.message = "Too Much!";
}
}
};

};

})();
