tvzShopApp.component('login', {
    templateUrl:'./pages/page.login.template.html',
    controller:function($state,$scope, AuthenticationService, $timeout){

        this.login=function(){
            AuthenticationService.login(this.user);
        };

        $scope.$on('auth_message',(e, d)=>{
            this.loginStatus = {};
            this.loginStatus.message=d.message;
           this.loginStatus.status=d.status;
        });

    },
    controllerAs:'c'

});