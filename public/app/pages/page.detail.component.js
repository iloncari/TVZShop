tvzShopApp.component('detail', {
    templateUrl:'./pages/page.detail.template.html',
    controller:function(AdvertisementService, $stateParams, AuthenticationService, $scope){
        this.$onInit = function () {
            this.filter={};
            if($stateParams.adId)
                this.filter.id=$stateParams.adId;
            else
                this.filter.id=new Date().toDateString();
            AdvertisementService.getAds(this.filter).then((d)=> {
                if(d.data.status===200 && d.data.advertisements.length==1){
                    this.advertisement = d.data.advertisements[0];
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