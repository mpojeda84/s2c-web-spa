/**
 * Created by mpereira on 7/30/2014.
 */
regionSelector
    .factory('regionSelectorSrv', ['$http', function($http) {
        var buildRegions = function() {

            return [
                {id: 1, name: 'Pinar del Rio'},
                {id: 2, name: 'Mayabeque'},
                {id: 1, name: 'Artemisa'},
                {id: 1, name: 'La Habana'}
            ];
        };
        return {
            getAllRegions:function(){
                return buildRegions();
            }
        };
    }]);

