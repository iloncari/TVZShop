tvzShopApp.component('detail', {
    templateUrl:'./pages/page.detail.template.html',
    controller:function(AdvertisementService, $stateParams, AuthenticationService, $scope){
        this.$onInit = function () {
            AdvertisementService.getAdById($stateParams.adId).then((d)=> {
                if(d.data.status===200){
                    this.advertisement = d.data.advertisement;
                    this.getUserById(this.advertisement.userId);
                }else{
                    this.errorText='Upss! Ne možemo naći stranicu koju tražite. Pokušajete ponovno ili se obratite administratoru.';
                }
            });
        };

        this.getUserById=function (userId) {
            AuthenticationService.getUserById(userId).then((d) => {
                this.owner = d.data.user;
            });
        };
    },
    controllerAs:'c'
});