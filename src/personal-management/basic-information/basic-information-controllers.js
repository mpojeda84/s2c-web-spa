
personalManagement
    .controller('basicInformationPersonalCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv', 'personalPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, personalPersistenceSrv) {

            //autocomplete for address
            $scope.result = '';
            $scope.options = null;
            $scope.details = '';

            $scope.personal = angular.copy(personalPersistenceSrv.basicInformation);

            $scope.saveBasicInformation = function () {
                if($scope.result != '') {
                    $scope.personal.location = $scope.result;
                    $scope.personal.locationDetails = $scope.details;
                }
                personalPersistenceSrv.basicInformation = $scope.personal;
            }
        }]);