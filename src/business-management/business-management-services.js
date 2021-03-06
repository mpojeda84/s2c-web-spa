/**
 * Created by mpereira on 7/30/2014.
 * Just to share data between controllers
 * Use this approach instead $rootScope
 */
businessManagement
    .factory('businessPersistenceSrv', function() {
    return {
        basicInformation:{
            id:null,
            name:null,
            phone:null,
            website:null,
            location:null
        },
        moneyOffers:[],
        packageOffers:[],
        //initializers, just to serve as a structure declaration of this objects
        newMoneyOffer:function(){
            return{
                id:null,
                active:true,
                description:null,
                special:false,
                minimum:0,
                maximum:10000,
                currencyOrigin:'USD',
                currencyTarget:'CUC',
                fee:5
            };
        },
        newPackageOffer:function(){
            //code constructor for PackageOffer
        }
    }

});

