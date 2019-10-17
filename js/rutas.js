<<<<<<< HEAD
var proto = angular.module('protoprint', ['ngRoute']);

proto.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/quienessomos', {
            templateUrl: 'pages/quienessomos.html',
        }).
        when('/servicios', {
            templateUrl: 'pages/servicios.html',
        }).
        when('/catalogos', {
            templateUrl: 'pages/catalogo.html',
        }).
        when('/contactanos', {
            templateUrl: 'pages/contactanos.html',
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'pages/inicio.html',
        });
    }
=======
var proto = angular.module('protoprint', ['ngRoute']);

proto.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/quienessomos', {
            templateUrl: 'pages/quienessomos.html',
        }).
        when('/servicios', {
            templateUrl: 'pages/servicios.html',
        }).
        when('/catalogos', {
            templateUrl: 'pages/catalogo.html',
        }).
        when('/contactanos', {
            templateUrl: 'pages/contactanos.html',
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'pages/inicio.html',
        });
    }
>>>>>>> b3ab241a4da8f29a63ea4caba22659e6368ce90c
]);