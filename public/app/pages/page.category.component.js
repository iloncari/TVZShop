tvzShopApp.component('category', {
    templateUrl:'./pages/page.category.template.html',
    controller:function($stateParams, AdvertisementService, $scope){
        this.$onInit = function () {
            this.type = $stateParams.categoryId;
            this.filter={};
            this.filter.type=this.type;
            this.filter.status='aktivan';
        };

        $scope.$on('brand_item_selected', (e, brand) => {
            this.filter.brand=brand;
            $scope.$broadcast('brand_item_selected1', brand);
        });

        $scope.$on('filter_ads', (event, filter) => {
            $scope.$broadcast('filter_ads1', filter);
        });
    },
    controllerAs:'c'

});