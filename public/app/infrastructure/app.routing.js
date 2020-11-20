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
    });

    $urlRouterProvider.otherwise('/');
});