
personalManagement
    .controller('personalManagementCtrl', ['$rootScope', '$scope','$http', '$log','$modal', '$state', 'mapSrv',
        function($rootScope, $scope,  $http, $log, $modal, $state, mapSrv) {
            $scope.menu="Initialization (temporal)";

            $scope.$on('$stateChangeSuccess', function(event, toState){
                $scope.subtitle = toState.data.subtitle;
            })
        }]);