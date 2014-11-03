/**
 * Created by mpereira on 7/30/2014.
 */

var app = angular.module('app', [
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'pascalprecht.translate',
    'ngSanitize',
    'appControllers',
    'appDirectives',
    //logical modules:
    'businessManagement' //,
    //reusable components:
    //'component1'
]);

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$translateProvider', '$injector', function ($httpProvider, $stateProvider, $urlRouterProvider, $translateProvider, $injector) {

    $stateProvider
        .state('business', {
            abstract:true,
            templateUrl: 'business-management/business-management.html',
            controller: 'businessManagementCtrl'
        })
        .state('business.basic', {
            url: '/business/basic',
            templateUrl: 'business-management/basic-information/basic-information.html',
            controller: 'basicInformationCtrl'
        })
        .state('business.money', {
            url: '/business/money',
            templateUrl: 'business-management/money-offer/money-offer.html',
            controller:'moneyOfferCtrl'
        })
        .state('business.package', {
            url: '/business/package',
            templateUrl: 'business-management/package-offer/package-offer.html',
            controller:'packageOfferCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'search/search.html'
        })
    ;
    $urlRouterProvider
        .when('', '/business/basic')
        .when('/', '/business/basic');

    $translateProvider.useStaticFilesLoader({
        prefix: 'common/translation/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');

}])

.run(['$rootScope', '$http', '$location', '$state', function ($rootScope, $http, $location, $state) {
        // mpereira: put init code here, like security interceptors etc
}]);

