/**
 * Created by amtorres on 10/21/14.
 */
businessManagement
    .controller('paperworkOfferCtrl', ['$rootScope', '$scope','$log','$modal', '$state', 'businessPersistenceSrv', '$filter',
        function($rootScope, $scope, $log, $modal, $state, businessPersistenceSrv, $filter) {
            $scope.businessPersistenceSrv = businessPersistenceSrv;

            $scope.paperworkOffer = businessPersistenceSrv.newPaperworkOffer();
            $scope.index = -1;
            $scope.paperworkOffers = businessPersistenceSrv.paperworkOffers;

            $scope.deletePaperworkOffer = function(index){
                $scope.paperworkOffers.splice(index,1);
                if($scope.index === index)
                    $scope.paperworkOffer = businessPersistenceSrv.newPaperworkOffer();
            };

            $scope.editPaperworkOffer = function(index){
                $scope.index = index;
                $scope.paperworkOffer = angular.copy($scope.paperworkOffers[index]);
            };

            $scope.cancelEditPaperworkOffer = function(index){
                $scope.index = -1;
                $scope.paperworkOffer = angular.copy($scope.paperworkOffers[index]);
            };


            $scope.savePaperworkOffer = function(){
                if($scope.index == -1)
                    $scope.paperworkOffers.push($scope.paperworkOffer);
                else{
                    $scope.paperworkOffers[$scope.index] = $scope.paperworkOffer;
                    $scope.index = -1;
                }
                $scope.paperworkOffer = businessPersistenceSrv.newPaperworkOffer();
            };

        }]);