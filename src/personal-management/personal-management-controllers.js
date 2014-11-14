
personalManagement
    .controller('personalManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv', 'personalPersistenceSrv', 'menuPersonalPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, personalPersistenceSrv, menuPersonalPersistenceSrv) {

            $scope.$on('$stateChangeSuccess', function(event, toState){
                $scope.subtitle = toState.data.subtitle;

                angular.forEach($scope.menu, function (item) {
                    if(toState.name === item.url)
                        $scope.menuItem = item;
                })
            })

            $scope.packageOffers = personalPersistenceSrv.packageOffers;

            //Menu Elements
            $scope.menu = menuPersonalPersistenceSrv.menuItems;
        }]);