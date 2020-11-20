let tvzShopApp = angular.module('tvzShopApp', ['ui.router']).run(function($transitions, $state){

    $transitions.onStart({}, function(transition) {


        return true;

    });

});