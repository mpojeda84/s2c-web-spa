/**
 * Created by mpereira on 7/30/2014.
 */
businessManagement
    .controller('moneyOfferCtrl', ['$rootScope', '$scope','$log','$modal', '$state', 'businessPersistenceSrv', '$filter',
        function($rootScope, $scope, $log, $modal, $state, businessPersistenceSrv, $filter) {

            $scope.moneyOffer = businessPersistenceSrv.newMoneyOffer();
            $scope.index = -1;
            $scope.moneyOffers = businessPersistenceSrv.business.moneyOffers;

            $scope.deleteMoneyOffer = function(index){
                $scope.moneyOffers.splice(index,1);
                if($scope.index === index)
                    $scope.moneyOffers = businessPersistenceSrv.newMoneyOffer();
            };

            $scope.editMoneyOffer = function(index){
                $scope.index = index;
                $scope.moneyOffer = angular.copy($scope.moneyOffers[index]);
            };

            $scope.cancelEditMoneyOffer = function(index){
                $scope.index = -1;
                $scope.moneyOffer = angular.copy($scope.moneyOffers[index]);
            };


            $scope.saveMoneyOffer = function(){
                if($scope.index == -1)
                    $scope.moneyOffers.push($scope.moneyOffer);
                else{
                    $scope.moneyOffers[$scope.index] = $scope.moneyOffer;
                    $scope.index = -1;
                }
                $scope.moneyOffer = businessPersistenceSrv.newMoneyOffer();
            };

        }]);