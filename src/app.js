/**
 * Created by mpereira on 7/30/2014.
 */

var app = angular.module('app', [
    'ngMessages',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngSanitize',
    'appControllers',
    'appDirectives',
    //logical modules:
    'businessManagement',
    'personalManagement',
    'companyManagement', //,
    'MessageCenterModule'
    //reusable components:
    //'component1'
]);

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$translateProvider', '$injector', function ($httpProvider, $stateProvider, $urlRouterProvider, $translateProvider, $injector) {

    $stateProvider
        .state('company', {
            url: '/company/:companyId',
            templateUrl: 'company-management/company-management.html',
            controller: 'companyManagementCtrl'
        })
        .state('business', {
            abstract:true,
            url:'/company/:companyId/business/:businessId',
            templateUrl: 'business-management/business-management.html',
            controller: 'businessManagementCtrl',
            resolve: {
                companyId: function($stateParams){
                    console.debug($stateParams.companyId);
                }
            }
        })
        .state('business.home', {
            url: '/home',
            templateUrl: 'business-management/home-information/home-information.html',
            controller: 'homeInformationCtrl',
            data: { subtitle: 'Home'}
        })
        .state('business.basic', {
            url: '/basic',
            templateUrl: 'business-management/basic-information/basic-information.html',
            controller: 'basicInformationCtrl',
            data: { subtitle: 'Basic Information' }
        })
        .state('business.money', {
            url: '/money',
            templateUrl: 'business-management/money-offer/money-offer.html',
            controller:'moneyOfferCtrl',
            data: { subtitle: 'Money Offers' }
        })
        .state('business.package', {
            url: '/package',
            templateUrl: 'business-management/package-offer/package-offer.html',
            controller:'packageOfferCtrl',
            data: { subtitle: 'Package Offers' }
        })
        .state('business.paperwork', {
            url: '/paperwork',
            templateUrl: 'business-management/paperwork-offer/paperwork-offer.html',
            controller:'paperworkOfferCtrl',
            data: { subtitle: 'Paperwork Offers' }
        })
        .state('business.call', {
            url: '/call',
            templateUrl: 'business-management/call-offer/call-offer.html',
            controller:'callOfferCtrl',
            data: { subtitle: 'Call Offers' }
        })
        .state('business.flight', {
            url: '/flight',
            templateUrl: 'business-management/flight-offer/flight-offer.html',
            controller:'flightOfferCtrl',
            data: { subtitle: 'Flight Offers' }
        })
        .state('business.car', {
            url: '/car',
            templateUrl: 'business-management/car-rental-offer/car-rental-offer.html',
            controller:'carRentalOfferCtrl',
            data: { subtitle: 'Car Rental Offers' }
        })
        // Personal
        .state('personal', {
            abstract:true,
            templateUrl: 'personal-management/personal-management.html',
            controller: 'personalManagementCtrl'
        })
        .state('personal.home', {
            url: '/personal/home',
            templateUrl: 'personal-management/home-information/home-information.html',
            controller: 'homeInformationCtrl',
            data: { subtitle: 'Home'}
        })
        .state('personal.basic', {
            url: '/personal/basic',
            templateUrl: 'personal-management/basic-information/basic-information.html',
            controller: 'basicInformationPersonalCtrl',
            data: { subtitle: 'Basic Information' }
        })
        .state('personal.package', {
            url: '/personal/package',
            templateUrl: 'personal-management/package-offer/package-offer.html',
            controller:'packageOfferPersonalCtrl',
            data: { subtitle: 'Package Offers' }
        })
        .state('search', {
            url: '/search',
            templateUrl: 'search/search.html'
        })
    ;
    $urlRouterProvider
        .when('', '/company')
        .when('/', '/company');

    $translateProvider.useStaticFilesLoader({
        prefix: 'common/translation/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');

}])

.run(['$rootScope', '$http', '$location', '$state', function ($rootScope, $http, $location, $state) {
}]);

