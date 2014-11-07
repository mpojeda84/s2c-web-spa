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
            location:null,
            locationDetails:null,
            disclose:false
        },
        moneyOffers:[],
        packageOffers:[],
        paperworkOffers:[],
        callOffers:[],
        flightOffers:[],
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
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                minimumWeight:1,
                maximumWeight:100,
                maximumSize:null,
                pickup:null,
                category:null
            }
        },
        newPaperworkOffer:function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                type:null
            }
        },
        newCallOffer:function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                price:null
            }
        },
        newFlightOffer:function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                arrivalPort:null,
                departurePort:null,
                lastUpdated:null
            }
        }
    }

}).factory('menuPersistenceSrv', function() {
    return {
        menuItems:[{
                name: "Home",
                checked: true,
                url: 'business.home'
            },{
                name: "Basic Information",
                checked: true,
                url: 'business.basic'
            },{
                name: "Money Offers",
                checked: false,
                url: 'business.money',
                count: 'moneyOffers.length'
            },{
                name: "Package Offers",
                checked: false,
                url: 'business.package',
                count: 'packageOffers.length'
            },{
                name: "Paperwork Offers",
                checked: false,
                url: 'business.paperwork',
                count: 'paperworkOffers.length'
            }
            ,{
                name: "Call Offers",
                checked: false,
                url: 'business.call',
                count: 'callOffers.length'
            }
            ,{
                name: "Flight Offers",
                checked: false,
                url: 'business.flight',
                count: 'flightOffers.length'
            }]
    }
});

