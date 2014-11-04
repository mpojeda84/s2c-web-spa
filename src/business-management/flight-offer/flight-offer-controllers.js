/**
 * Created by amtorres on 10/21/14.
 */
businessManagement
    .controller('flightOfferCtrl', ['$rootScope', '$scope','$log','$modal', '$state', 'businessPersistenceSrv', '$filter',
        function($rootScope, $scope, $log, $modal, $state, businessPersistenceSrv, $filter) {
            $scope.businessPersistenceSrv = businessPersistenceSrv;

            $scope.flightOffer = businessPersistenceSrv.newFlightOffer();
            $scope.index = -1;
            $scope.flightOffers = businessPersistenceSrv.flightOffers;

            $scope.deleteFlightOffer = function(index){
                $scope.flightOffers.splice(index,1);
            };

            $scope.editFlightOffer = function(index){
                $scope.index = index;
                $scope.flightOffer = angular.copy($scope.flightOffers[index]);
            };

            $scope.cancelEditFlightOffer = function(index){
                $scope.index = -1;
                $scope.flightOffer = angular.copy($scope.flightOffers[index]);
            };


            $scope.saveFlightOffer = function(){
                if($scope.index == -1)
                    $scope.flightOffers.push($scope.flightOffer);
                else{
                    $scope.flightOffers[$scope.index] = $scope.flightOffer;
                    $scope.index = -1;
                }
                $scope.flightOffer = businessPersistenceSrv.newFlightOffer();
            };

        }]);