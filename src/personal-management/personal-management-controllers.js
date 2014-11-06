
personalManagement
    .controller('personalManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv', 'personalPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, personalPersistenceSrv) {

            $scope.$on('$stateChangeSuccess', function(event, toState){
                $scope.subtitle = toState.data.subtitle;
            })

            $scope.packageOffers = personalPersistenceSrv.packageOffers;
        }]);