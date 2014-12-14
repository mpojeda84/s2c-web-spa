/**
 * Created by mpereira on 7/30/2014.
 */
companyManagement
    .controller('basicInformationCompanyCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv', 'companyPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv, companyPersistenceSrv) {

            $scope.company = angular.copy(companyPersistenceSrv.basicInformation);
            $scope.offices = angular.copy(companyPersistenceSrv.offices);

            $scope.saveCompanyInformation = function () {
                companyPersistenceSrv.basicInformation = $scope.company;
                console.log("saved....");
            };

            $scope.addNew = function(){

            };

            $scope.editOffice = function(){

            };

            $scope.deleteOffice = function(){

            };
        }]);