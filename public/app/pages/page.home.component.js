tvzShopApp.component('home', {
    templateUrl:'./pages/page.home.template.html',
    controller:function(AdvertisementService){
        this.$onInit = function () {
            this.adTypes=AdvertisementService.advertisementType;
        };
    },
    controllerAs:'c'
});