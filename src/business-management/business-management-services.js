/**
 * Created by mpereira on 7/30/2014.
 * Just to share data between controllers
 * Use this approach instead $rootScope
 */
businessManagement
    .factory('businessPersistenceSrv', function() {

        var newMoneyOffer = function(){
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
        };
        var newPackageOffer = function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                minimumWeight:1,
                maximumWeight:100,
                maximumSize:0,
                pickup:null,
                category:null
            }
        };
        var newPaperworkOffer = function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                type:null
            }
        };
        var newCallOffer = function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                price:0
            }
        };
        var newFlightOffer = function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                arrivalPort:null,
                departurePort:null,
                lastUpdated:null
            }
        };
        var newCarRentalOffer = function(){
            return {
                id:null,
                active:null,
                description:null,
                special:null,
                category:null,
                price:0,
                numDays:1
            }
        };

        var newBusiness = function(){
            return {
                basicInformation:{
                    id:null,
                    contactInformation: {
                        phone:null,
                        email:null
                    },
                    fullLocation:null,
                    discloseLocation:false
                },
                moneyOffers:[],
                packageOffers:[],
                paperworkOffers:[],
                callOffers:[],
                flightOffers:[],
                carRentalOffers:[]
                //initializers, just to serve as a structure declaration of this objects
            }
        }

    return {
        business:newBusiness(),
        newBusiness:newBusiness,
        newMoneyOffer:newMoneyOffer,
        newPackageOffer: newPackageOffer,
        newPaperworkOffer: newPaperworkOffer,
        newCallOffer: newCallOffer,
        newFlightOffer: newFlightOffer,
        newCarRentalOffer: newCarRentalOffer
    };

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
                name: "Call Offers (refactor)",
                checked: false,
                url: 'business.call',
                count: 'callOffers.length'
            }
            ,{
                name: "Flight Offers",
                checked: false,
                url: 'business.flight',
                count: 'flightOffers.length'
            }
            ,{
                name: "Car Rental Offers (refactor)",
                checked: false,
                url: 'business.car',
                count: 'carRentalOffers.length'
            }]
    }
});

