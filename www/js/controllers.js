angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('PaisesCtrl', function($scope, $http) {
  
    $http.get('https://restcountries.eu/rest/v1/region/americas').then(function bien(respuesta){

    $scope.ListadoPaises = respuesta.data;

    }, function mal(error){

      console.info("error", error.data);
      $scope.ListadoPaises = [];

    })
});