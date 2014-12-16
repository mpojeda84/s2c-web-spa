/**
 * Created by amtorres on 10/21/14.
 */
businessManagement
    .controller('packageOfferCtrl', ['$rootScope', '$scope','$log','$modal', '$state', 'businessPersistenceSrv', '$filter',
        function($rootScope, $scope, $log, $modal, $state, businessPersistenceSrv, $filter) {

            $scope.packageOffer = businessPersistenceSrv.newPackageOffer();
            $scope.index = -1;
            $scope.packageOffers = businessPersistenceSrv.business.packageOffers;

            $scope.deletePackageOffer = function(index){
                $scope.packageOffers.splice(index,1);
                if($scope.index === index)
                    $scope.packageOffer = businessPersistenceSrv.newPackageOffer();
            };

            $scope.editPackageOffer = function(index){
                $scope.index = index;
                $scope.packageOffer = angular.copy($scope.packageOffers[index]);
            };

            $scope.cancelEditPackageOffer = function(index){
                $scope.index = -1;
                $scope.packageOffer = angular.copy($scope.packageOffers[index]);
            };


            $scope.savePackageOffer = function(){
                if($scope.index == -1)
                    $scope.packageOffers.push($scope.packageOffer);
                else{
                    $scope.packageOffers[$scope.index] = $scope.packageOffer;
                    $scope.index = -1;
                }
                $scope.packageOffer = businessPersistenceSrv.newPackageOffer();
            };

        }]);