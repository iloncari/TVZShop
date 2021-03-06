tvzShopApp.component('navBar', {
    template: `
        <div class="navbar navbar-default" style="margin-bottom: 0px;">
            <ul class="nav nav-pills">
              <li role="presentation" ng-class="c.getClass('home')"><a ui-sref="home">Naslovnica</a></li>
              <li role="presentation" ng-class="c.getClass('login')" ng-if = "!c.isLoggedIn"><a ui-sref="login">Prijava</a></li>   
              <li role="presentation" ng-class="c.getClass('register')"><a ui-sref="register">Registracija</a></li>            
              <li role="presentation" ng-class="c.getClass('account')" ng-if = "c.isLoggedIn"><a ui-sref="account">Moj Oglasnik</a></li>     
              <li role="presentation" ng-class="c.getClass('advertisement')"><a ui-sref="advertisement">Predaj oglas</a></li>        
              <li role="presentation" ng-if = "c.isLoggedIn"><a ng-click="c.logout()">Odjava</a></li>  
            </ul>
       </div>      
   `,
    controller: function ($state, $scope, AuthenticationService) {
        this.$onInit = function () {
            this.isLoggedIn =AuthenticationService.isAuthenticated();
        };

        this.logout = function () {
            AuthenticationService.logout();
            this.isLoggedIn=false;
        };

        this.getClass = function (c) {
            if ($state.current.name == c) return 'active';
        };

        $scope.$on('login_status',(e, d)=>{
            this.isLoggedIn=d;
        });
    },
    controllerAs: 'c'
});
