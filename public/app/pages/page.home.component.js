tvzShopApp.component('home', {
    templateUrl:'./pages/page.home.template.html',
    controller:function(AdvertisementService){
        this.$onInit = function () {
            this.adTypes=AdvertisementService.advertisementType;
            this.filter={};
            this.filter.status='aktivan';
            this.filter.limit=15;
            AdvertisementService.getAds(this.filter).then((d) => {
                this.advertisements = d.data.advertisements;
            });

        };
    },
    controllerAs:'c'
});