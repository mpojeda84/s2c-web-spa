/**
 * Created by mpereira on 7/30/2014.
 */
businessManagement
    .controller('basicInformationCtrl', ['$rootScope', '$scope','$log','$modal', '$state', 'businessPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, businessPersistenceSrv) {

            //autocomplete for address
            $scope.result = '';
            $scope.options = null;
            $scope.details = '';

        }]);