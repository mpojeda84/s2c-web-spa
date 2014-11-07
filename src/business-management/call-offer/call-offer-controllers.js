/**
 * Created by amtorres on 10/21/14.
 */
businessManagement
    .controller('callOfferCtrl', ['$rootScope', '$scope','$log','$modal', '$state', 'businessPersistenceSrv', '$filter',
        function($rootScope, $scope, $log, $modal, $state, businessPersistenceSrv, $filter) {
            $scope.businessPersistenceSrv = businessPersistenceSrv;

            $scope.callOffer = businessPersistenceSrv.newCallOffer();
            $scope.index = -1;
            $scope.callOffers = businessPersistenceSrv.callOffers;

            $scope.deleteCallOffer = function(index){
                $scope.callOffers.splice(index,1);
                if($scope.index === index)
                    $scope.callOffer = businessPersistenceSrv.newCallOffer();
            };

            $scope.editCallOffer = function(index){
                $scope.index = index;
                $scope.callOffer = angular.copy($scope.callOffers[index]);
            };

            $scope.cancelEditCallOffer = function(index){
                $scope.index = -1;
                $scope.callOffer = angular.copy($scope.callOffers[index]);
            };


            $scope.saveCallOffer = function(){
                if($scope.index == -1)
                    $scope.callOffers.push($scope.callOffer);
                else{
                    $scope.callOffers[$scope.index] = $scope.callOffer;
                    $scope.index = -1;
                }
                $scope.callOffer = businessPersistenceSrv.newCallOffer();
            };

        }]);