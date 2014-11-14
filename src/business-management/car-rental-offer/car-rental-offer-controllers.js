/**
 * Created by amtorres on 10/21/14.
 */
businessManagement
    .controller('carRentalOfferCtrl', ['$rootScope', '$scope','$log','$modal', '$state', 'businessPersistenceSrv', '$filter',
        function($rootScope, $scope, $log, $modal, $state, businessPersistenceSrv, $filter) {

            $scope.carRentalOffer = businessPersistenceSrv.newCarRentalOffer();
            $scope.index = -1;
            $scope.carRentalOffers = businessPersistenceSrv.carRentalOffers;

            $scope.deleteCarRentalOffer = function(index){
                $scope.carRentalOffers.splice(index,1);
                if($scope.index === index)
                    $scope.carRentalOffer = businessPersistenceSrv.newCarRentalOffer();
            };

            $scope.editCarRentalOffer = function(index){
                $scope.index = index;
                $scope.carRentalOffer = angular.copy($scope.carRentalOffers[index]);
            };

            $scope.cancelEditCarRentalOffer = function(index){
                $scope.index = -1;
                $scope.carRentalOffer = angular.copy($scope.carRentalOffers[index]);
            };


            $scope.saveCarRentalOffer = function(){
                if($scope.index == -1)
                    $scope.carRentalOffers.push($scope.carRentalOffer);
                else{
                    $scope.carRentalOffers[$scope.index] = $scope.carRentalOffer;
                    $scope.index = -1;
                }
                $scope.carRentalOffer = businessPersistenceSrv.newCarRentalOffer();
            };

        }]);