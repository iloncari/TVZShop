tvzShopApp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider.
    state('home', {
        url:'/',
        component: 'home'
    }).state('register', {
        url:'/register',
        component: 'register'
    }).state('login', {
        url:'/login',
        component: 'login'
    }).state('account', {
        url:'/account',
        component: 'account'
    }).state('category' ,{
        url:'/:categoryId',
        component:'category'
    }).state('detail' ,{
        url:'/:adId',
        component:'detail'
    }).state('advertisement' ,{
        url:'/advertisement',
        component:'advertisement'
    });



    $urlRouterProvider.otherwise('/');
 // $httpProvider.interceptors.push('interceptorService');
});