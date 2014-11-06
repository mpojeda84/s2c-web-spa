
personalManagement
    .controller('packageOfferPersonalCtrl', ['$rootScope', '$scope','$log','$modal', '$state', 'personalPersistenceSrv', '$filter',
        function($rootScope, $scope, $log, $modal, $state, personalPersistenceSrv, $filter) {
            $scope.personalPersistenceSrv = personalPersistenceSrv;

            $scope.packageOffer = personalPersistenceSrv.newPackageOffer();
            $scope.index = -1;
            $scope.packageOffers = personalPersistenceSrv.packageOffers;

            $scope.deletePackageOffer = function(index){
                $scope.packageOffers.splice(index,1);
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
                $scope.packageOffer = personalPersistenceSrv.newPackageOffer();
            };

            $scope.today = function() {
                $scope.minDate = new Date();
            };

            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened = true;
            };

        }]);