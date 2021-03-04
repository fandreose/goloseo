"use strict";

var app = angular.module("argon", [
    "ngRoute",
    'ui.select',
    'ngSanitize',
    'pascalprecht.translate',
    'angular-uuid',
    'ngAnimate',
    'angularUtils.directives.dirPagination',
    'angular-bind-html-compile',
    'chart.js',
    'ngFileUpload',
    'ngCsv'
])
    .constant('roles', {
        manager: '01',
        employee: '02',
        shiftSupervisor: '03',
        worker: '04'
    })
    .run(function ($http, store) {
        // carico il file di configurazione per l'ambiente
        $http.get('/configurations').then(response => {
            store.setConfig(response.data);
        }).catch(response => {
            const config = {
                "API_BASE_URL": "http://localhost:3000"
            };
            store.setConfig(config);
            console.error("File di configurazione mancante, valori di defalut caricati: ", config)
        });

    })
    .run(function ($http) {
        $http.defaults.headers.common["Content-Type"] = 'application/json';
    })
    .config(['$httpProvider', function ($httpProvider) {
        //Http Intercpetor to check auth failures for xhr requests
        $httpProvider.interceptors.push('authHttpResponseInterceptor');
    }])
    .config(function (paginationTemplateProvider) {
        paginationTemplateProvider.setPath('./templates/dirPagination.tpl.html'); //Usato solo per il plug-in di paginazione
    })
    .config(function (ChartJsProvider) {
        ChartJsProvider.setOptions({
            colors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
        });
    });
