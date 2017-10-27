'use strict';

angular.module('vedci')
  .controller('loginCtrl', function($scope, LoginLogoutSrv) {

    $scope.login = function(email, password) {
      LoginLogoutSrv.login(email, password);
    };

  });
