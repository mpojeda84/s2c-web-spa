/**
 * Created by mpereira on 7/30/2014.
 */

var app = angular.module('app', [
    'ngMessages',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngSanitize',
    'appControllers',
    'appDirectives',
    //logical modules:
    'businessManagement',
    'personalManagement',
    'companyManagement' //,
    //reusable components:
    //'component1'
]);

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$translateProvider', '$injector', function ($httpProvider, $stateProvider, $urlRouterProvider, $translateProvider, $injector) {

    $stateProvider
        .state('company', {
            url: '/company',
            templateUrl: 'company-management/basic-information/basic-information.html',
            controller: 'basicInformationCompanyCtrl'
        })
        .state('business', {
            abstract:true,
            templateUrl: 'business-management/business-management.html',
            controller: 'businessManagementCtrl'
        })
        .state('business.home', {
            url: '/business/home',
            templateUrl: 'business-management/home-information/home-information.html',
            controller: 'homeInformationCtrl',
            data: { subtitle: 'Home'}
        })
        .state('business.basic', {
            url: '/business/basic',
            templateUrl: 'business-management/basic-information/basic-information.html',
            controller: 'basicInformationCtrl',
            data: { subtitle: 'Basic Information' }
        })
        .state('business.money', {
            url: '/business/money',
            templateUrl: 'business-management/money-offer/money-offer.html',
            controller:'moneyOfferCtrl',
            data: { subtitle: 'Money Offers' }
        })
        .state('business.package', {
            url: '/business/package',
            templateUrl: 'business-management/package-offer/package-offer.html',
            controller:'packageOfferCtrl',
            data: { subtitle: 'Package Offers' }
        })
        .state('business.paperwork', {
            url: '/business/paperwork',
            templateUrl: 'business-management/paperwork-offer/paperwork-offer.html',
            controller:'paperworkOfferCtrl',
            data: { subtitle: 'Paperwork Offers' }
        })
        .state('business.call', {
            url: '/business/call',
            templateUrl: 'business-management/call-offer/call-offer.html',
            controller:'callOfferCtrl',
            data: { subtitle: 'Call Offers' }
        })
        .state('business.flight', {
            url: '/business/flight',
            templateUrl: 'business-management/flight-offer/flight-offer.html',
            controller:'flightOfferCtrl',
            data: { subtitle: 'Flight Offers' }
        })
        .state('business.car', {
            url: '/business/car',
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
        .when('', '/company/basic')
        .when('/', '/company/basic');

    $translateProvider.useStaticFilesLoader({
        prefix: 'common/translation/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');

}])

.run(['$rootScope', '$http', '$location', '$state', function ($rootScope, $http, $location, $state) {
        // mpereira: put init code here, like security interceptors etc
}]);

