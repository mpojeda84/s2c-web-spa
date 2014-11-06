/**
 * Created by mpereira on 7/30/2014.
 */
businessManagement
    .controller('businessManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv', 'businessPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, businessPersistenceSrv) {

            $scope.$on('$stateChangeSuccess', function(event, toState){
                $scope.subtitle = toState.data.subtitle;
            })

            $scope.moneyOffers = businessPersistenceSrv.moneyOffers;
            $scope.packageOffers = businessPersistenceSrv.packageOffers;
            $scope.paperworkOffers = businessPersistenceSrv.paperworkOffers;
            $scope.callOffers = businessPersistenceSrv.callOffers;
            $scope.flightOffers = businessPersistenceSrv.flightOffers;


        }]);