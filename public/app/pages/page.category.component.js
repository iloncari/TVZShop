tvzShopApp.component('category', {
    templateUrl:'./pages/page.category.template.html',
    controller:function($stateParams, AdvertisementService, $scope){
        this.$onInit = function () {
            this.type = $stateParams.categoryId;
            this.filter={};
            this.filter.type=this.type;
            this.filter.status='aktivan';
            this.getAds();
            this.adTitle=this.type + " - svi";
        };

        this.getAds = function(){
            AdvertisementService.getAds(this.filter).then((d) => {
                this.advertisements=d.data.advertisements;
            });
        };

        //slusaj iz brandLista da je odabran
        //salji u filtere da je brand selected
        $scope.$on('brand_item_selected', (e, brand) => {
            this.filter.brand=brand;
            this.getAds();
            this.adTitle = this.type + " - " + (brand==='' ? 'svi' : brand);
            $scope.$broadcast('brand_item_selected1', brand);
        });

        //slusaj iz filtra da je filtrirano
        $scope.$on('ads_filtered', (e, ads) => {
            this.advertisements = ads;
            this.adTitle=this.type;
        });

        $scope.$on('filtered_ads', (event, brand) => {

        });
    },
    controllerAs:'c'

});