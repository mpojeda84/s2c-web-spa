
companyManagement
    .factory('companyPersistenceSrv', function() {
    return {
        basicInformation:{
            id:null,
            name:null,
            website:null
        },
        offices:[]
    }
})

    .factory('companySrv', [ '$http','$rootScope',function($http, $rootScope) {

        var getCompany = function(companyId){
            return $http.get('http://localhost:8080/company/' + companyId)
                    .then(function(result) {
                        return result.data;
                    },
                    function(){

                    })
            };

        var saveCompany = function(company){
        return $http.put('http://localhost:8080/company/' + company.id, company)
            .then(function(result) {

                return result.data;
            },
            function(error){

            })
        };

        var createBusiness = function(companyId){
            return $http.post('http://localhost:8080/company/' + companyId + "/business/",{})
                .then(function(result) {
                    return result.data;
                },
                function(){

                })
        };


        return {
            getCompany:getCompany,
            saveCompany:saveCompany,
            createBusiness:createBusiness
        }

    }])
;

