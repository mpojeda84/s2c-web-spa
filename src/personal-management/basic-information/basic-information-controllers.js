
personalManagement
    .controller('basicInformationPersonalCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv', 'personalPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, personalPersistenceSrv) {

            //autocomplete for address
            $scope.result = '';
            $scope.options = null;
            $scope.details = '';

        }]);