/**
 * Created by mpereira on 7/30/2014.
 */
businessManagement
    .controller('businessManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', '$stateParams', 'mapSrv', 'businessPersistenceSrv', 'businessSrv', 'menuPersistenceSrv', 'companyPersistenceSrv',  'business',
        function($rootScope, $scope,  $http, $log, $modal, $state, $stateParams, mapSrv, businessPersistenceSrv, businessSrv, menuPersistenceSrv, companyPersistenceSrv,  business) {

            $scope.$on('$stateChangeSuccess', function(event, toState){
                $scope.subtitle = toState.data.subtitle;

                angular.forEach($scope.menu, function (item) {
                    if(toState.name === item.url)
                        $scope.menuItem = item;
                })
            })

            businessPersistenceSrv.business = business;
            $scope.business = businessPersistenceSrv.business;

            //Menu Elements
            $scope.menu = menuPersistenceSrv.menuItems;

            $scope.save = function(){
                businessSrv.saveBusiness(businessPersistenceSrv.business)
                    .then(function(result){

                    }, function(error){

                    });
            };
            $scope.goBack = function(){
                $state.go('company',{companyId:$stateParams.companyId});
            }


        }]);