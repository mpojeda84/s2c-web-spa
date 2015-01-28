
companyManagement
    .controller('companyManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', '$stateParams','mapSrv', 'businessPersistenceSrv', 'companySrv', 'companyPersistenceSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, $stateParams, mapSrv, businessPersistenceSrv, companySrv, companyPersistenceSrv) {

            companySrv.getCompany($stateParams.companyId)
                .then(function(company){
                    companyPersistenceSrv.company = company;
                    $scope.company = companyPersistenceSrv.company;
                });

            $scope.saveCompany = function() {
                companySrv.saveCompany($scope.company);
            }

            $scope.addNewOffice = function(){
                $scope.creatingBusiness = true;
                companySrv.createBusiness($stateParams.companyId)
                    .then(function(businessId){
                        $scope.creatingBusiness = false;
                        $state.go("business.home",{companyId:$stateParams.companyId, businessId:businessId});
                    }, function(error){

                    });

            }



        }]);