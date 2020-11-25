let tvzShopApp = angular.module('tvzShopApp', ['ui.router']).run(function($transitions, $state, AuthenticationService){
    $transitions.onStart({}, function(transition) {
        if (transition.to().component=='advertisement' || transition.to().component=='account'){
            return new Promise((resolve, reject) => {
                let isLogged = AuthenticationService.isAuthenticated();
                if(!isLogged) {
                    reject();
                    $state.go('login');
                }else
                    resolve();
            });

        }
        return true;

    });
});