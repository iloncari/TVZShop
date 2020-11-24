tvzShopApp.component('home', {
    templateUrl:'./pages/page.home.template.html',
    controller:function(AdvertisementService){
        this.$onInit = function () {
            this.adTypes=AdvertisementService.advertisementType;
        };
        this.sendMail = function (mail) {
            window.open('mailto:admin.tvzshop@tvz.hr?subject='+mail.subject+'&body='+mail.message);
        };
    },
    controllerAs:'c'
});