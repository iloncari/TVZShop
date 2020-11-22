tvzShopApp.component('account', {
    templateUrl: './pages/page.account.template.html',
    controller: function (AdvertisementService, AuthenticationService, $scope) {
        this.$onInit = function () {
            this.user = AuthenticationService.getUser();
            if (this.user) {
                this.filter={};
                this.filter.userId=this.user._id;
                this.filter.status='aktivan';
                AdvertisementService.getAds(this.filter).then((d) => {
                    this.activeAdvertisements=d.data.advertisements
                });

                this.soldFilter={};
                this.soldFilter.userId=this.user._id;
                this.soldFilter.status='prodan';
                AdvertisementService.getAds(this.soldFilter).then((d) => {
                    this.soldAdvertisements=d.data.advertisements
                });
            }
        };

        this.markAsSold = function (adId) {
            let indx = this.activeAdvertisements.findIndex(ad => ad._id == adId);
            let ad = this.activeAdvertisements[indx];
            ad.status = 'prodan';

            this.activeAdvertisements.splice(indx, 1);
            this.soldAdvertisements.push(ad);

            /**AdvertisementService.updateAd(ad).then((d) => {
                if(d.data.status===201){
                    this.activeAdvertisements.splice(indx, 1);
                    this.soldAdvertisements.push(ad);
                }
            });
             };**/
        };

        this.deleteAd = function (adId) {
           // AdvertisementService.deleteAd(adId);

            let indx = this.activeAdvertisements.findIndex(ad => ad._id == adId);
            let ad = this.activeAdvertisements[indx];
            if(ad){
                this.activeAdvertisements.splice(indx, 1);
                return;
            }

            indx = this.soldAdvertisements.findIndex(ad => ad._id == adId);
            ad={};
            ad = this.soldAdvertisements[indx];
            if(ad){
                this.soldAdvertisements.splice(indx, 1);
            }
        };




    },
    controllerAs: 'c'

});