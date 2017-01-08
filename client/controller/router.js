var app=angular.module('demo', ['ui.router', 'ngMaterial']);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('profilo',{
        url:"/profilo",
        templateUrl:"/views/profilo.html",
        controller:"profCtrl"
    });
   
})
