/**
 * Created by mpereira on 7/30/2014.
 */
businessManagement
    .controller('businessManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', '$stateParams', 'mapSrv', 'businessPersistenceSrv', 'businessSrv', 'menuPersistenceSrv', 'companyPersistenceSrv', 'messageCenterService',
        function($rootScope, $scope,  $http, $log, $modal, $state, $stateParams, mapSrv, businessPersistenceSrv, businessSrv, menuPersistenceSrv, companyPersistenceSrv, message) {

            $scope.$on('$stateChangeSuccess', function(event, toState){
                $scope.subtitle = toState.data.subtitle;

                angular.forEach($scope.menu, function (item) {
                    if(toState.name === item.url)
                        $scope.menuItem = item;
                })
            })


            businessSrv.getBusiness($stateParams.companyId, $stateParams.businessId)
                .then(function(result){
                    businessPersistenceSrv.business = result;
                    $scope.business = businessPersistenceSrv.business;
                }, function(error){

                });


            //Menu Elements
            $scope.menu = menuPersistenceSrv.menuItems;


        }]);