/**
 * Created by mpereira on 7/30/2014.
 */
var appControllers = angular.module('appControllers',['appServices']);
appControllers
    .controller('appCtrl', ['$http','$rootScope', '$scope','$translate','appSrv',
        function($http, $rootScope, $scope, $translate, appSrv) {

           $scope.switchLanguage = function (key) {
                $translate.use(key);
            };


        }]);
