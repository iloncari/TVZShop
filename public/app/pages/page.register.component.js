tvzShopApp.component('register', {
    templateUrl: './pages/page.register.template.html',
    controller: function (AuthenticationService, CityCountyService, $timeout, $state) {
        this.$onInit = function () {
            this.user={};
            this.user.location={};
            this.chooseCounty=true;

            CityCountyService.fetchCounties().then((d)=> {
                if(d.data.status==200) {
                    this.counties = d.data.counties;
                }else {
                    this.user.location.county = "GRAD ZAGREB";
                    this.user.location.city = "ZAGREB";
                    this.chooseCity=false;
                    this.chooseCounty=false;
                }
            });
        };

        this.findCities = function (county) {
            if (county != undefined && county!=="") {
                CityCountyService.fetchCities(county).then((d) => {
                   if(d.data.status=200){
                       this.cities=d.data.cities;
                       this.chooseCity = true;
                   }
                });
            } else if(county==undefined || county===""){
                this.chooseCity = false;
            }
        };

        this.submitRegisterForm = function () {
            this.user.favorites = [];
            AuthenticationService.register(this.user).then((d) => {
                this.registerStatus = {};
                this.registerStatus.message=d.data.message;
                if(d.data.status==500 || d.data.status==464) {
                    this.registerStatus.status = "NOT OK";
                }else{
                    this.registerStatus.status = "OK";
                    $timeout(()=>{
                        $state.go('login');
                    },1000);
                }
            });
        };
    },
    controllerAs: 'c'

});