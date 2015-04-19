Workbook.controller('HomeCtrl', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.getData = function() {
      $http.get("/getData")
        .success(function(response) {$scope.output = response.data});
    }
    
    $scope.getData();
    $scope.someData = {
      text: ''
    };

    $scope.submit = function() {
      $scope.inputError = false;
      if($scope.inputForm.$valid) {
        $http.post("/sendData", $scope.someData)
          .success(function() {
            $scope.getData();
          });
      };
    };
  }
]);