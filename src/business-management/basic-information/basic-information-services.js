/**
 * Created by mpereira on 7/30/2014.
 */
businessManagement.factory('basicInformationSrv', function() {

    var saveBasicInformation = function(companyId, businessId, business){
        return $http.put('http://localhost:8080/company/' + companyId + "/business/" + businessId, business)
            .then(function(result) {
                return result.data;
            },
            function(error){

            })
    };

    return {
        saveBasicInformation:saveBasicInformation
    }

});

