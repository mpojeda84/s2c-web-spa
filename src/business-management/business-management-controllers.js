/**
 * Created by mpereira on 7/30/2014.
 */
businessManagement
    .controller('businessManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv', 'businessPersistenceSrv', 'menuPersistenceSrv', 'companyPersistenceSrv', 'messageCenterService',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, businessPersistenceSrv, menuPersistenceSrv, companyPersistenceSrv, message) {

            $scope.$on('$stateChangeSuccess', function(event, toState){
                $scope.subtitle = toState.data.subtitle;

                angular.forEach($scope.menu, function (item) {
                    if(toState.name === item.url)
                        $scope.menuItem = item;
                })
            })

            $scope.moneyOffers = businessPersistenceSrv.business.moneyOffers;
            $scope.packageOffers = businessPersistenceSrv.business.packageOffers;
            $scope.paperworkOffers = businessPersistenceSrv.business.paperworkOffers;
            $scope.callOffers = businessPersistenceSrv.business.callOffers;
            $scope.flightOffers = businessPersistenceSrv.business.flightOffers;
            $scope.carRentalOffers = businessPersistenceSrv.business.carRentalOffers;

            //Menu Elements
            $scope.menu = menuPersistenceSrv.menuItems;

            $scope.saveAll = function(){
                companyPersistenceSrv.offices.push({
                    basicInformation: businessPersistenceSrv.basicInformation,
                    moneyOffers: businessPersistenceSrv.moneyOffers,
                    packageOffers: businessPersistenceSrv.packageOffers,
                    paperworkOffers: businessPersistenceSrv.paperworkOffers,
                    callOffers: businessPersistenceSrv.callOffers,
                    flightOffers: businessPersistenceSrv.flightOffers,
                    carRentalOffers: businessPersistenceSrv.carRentalOffers
                });
                message.add('success', 'The new Office has been created!', {status: 'next'});
                $state.go('company');
            }
        }]);