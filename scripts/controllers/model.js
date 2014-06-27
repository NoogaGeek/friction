'use strict';

app.controller('ModelController',
  function ($rootScope, $scope, $location, $routeParams, ModelFactory) {
    if ($location.path() === '/models/:modelId') {
      $scope.model = ModelFactory.find($routeParams.modelId);
    } else {
      $scope.model = {};
    };

    $scope.createModel = function () {
      console.log('ModelCtrl - createModel()');
      ModelFactory.create($scope.model);
      $scope.model = {};
      //.then(function () {
      //  //promise callback
        console.log('ModelController - createModel().then()');
      //});
    };

    $scope.findModel = function (modelId) {
      console.log('ModelCtrl - findModel()');
      ModelFactory.find(modelId).then(function () {
        //promise callback
        console.log('ModelController - findModel().then()');
      })
    };

    $scope.updateModel = function (modelId) {
      console.log('ModelCtrl - updateModel()');
      ModelFactory.update($scope.model).then(function () {
        //promise callback
        console.log('ModelController - updateModel().then()');
      });
    };

    $scope.deleteModel = function (modelId) {
      console.log('ModelCtrl - deleteModel()');
      ModelFactory.delete(modelId).then(function () {
        // promise callback
        console.log('ModelController - deleteModel().then()');

      });
    };
  }
);
