
personalManagement
    .factory('personalPersistenceSrv', function() {
    return {
        basicInformation:{
            id:null,
            name:null,
            phone:null,
            website:null,
            location:null
        },
        packageOffers:[],
        //initializers, just to serve as a structure declaration of this objects
        newPackageOffer:function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                minimumWeight:1,
                maximumWeight:100,
                maximumSize:null,
                pickup:null,
                category:null,
                departureDate:null
            }
        }
    }
});

