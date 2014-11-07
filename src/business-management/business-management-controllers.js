/**
 * Created by mpereira on 7/30/2014.
 */
businessManagement
    .controller('businessManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv', 'businessPersistenceSrv', 'menuPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, businessPersistenceSrv, menuPersistenceSrv) {

            $scope.$on('$stateChangeSuccess', function(event, toState){
                $scope.subtitle = toState.data.subtitle;

                angular.forEach($scope.menu, function (item) {
                    if(toState.name === item.url)
                        $scope.menuItem = item;
                })
            })

            $scope.moneyOffers = businessPersistenceSrv.moneyOffers;
            $scope.packageOffers = businessPersistenceSrv.packageOffers;
            $scope.paperworkOffers = businessPersistenceSrv.paperworkOffers;
            $scope.callOffers = businessPersistenceSrv.callOffers;
            $scope.flightOffers = businessPersistenceSrv.flightOffers;

            //Checkbox on Menu
            $scope.menu = menuPersistenceSrv.menuItems;

            $scope.handleCheck = function (menuItem) {
                $scope.menuItem = menuItem;
                $state.go(menuItem.url);
            }
        }]);