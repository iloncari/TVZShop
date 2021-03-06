tvzShopApp.component('filter', {
    templateUrl: './components/filter.template.html',
    bindings: {
        category: '@'
    },
    controller: function (BrandService, $scope, AdvertisementService, $rootScope) {
        this.$onInit = function(){
            BrandService.getBrand(this.category).then((d)=> {
                this.brands=d.data.brands;
            });
            this.fuelTypes = AdvertisementService.fuelType;
        };

        this.isAdType = function (adTypeId) {
            return this.category === adTypeId;
        };

        this.getYears = function () {
            this.years = [];
            for(let i = new Date().getFullYear(); i >= 1971; i--)
                this.years.push(i);
            return this.years;
        };

        this.onBrandSelect = function (brand) {
            if (brand != undefined && brand != '')
                BrandService.getModels(brand).then((d) => {
                   this.models=d.data.models;
                });
            else {
                this.filter={};
            }
        };

        $scope.$on('brand_item_selected1', (event, brand) => {
            this.filter = {};
            this.filter.brand = brand;
            if(brand != '') {
                BrandService.getModels(brand).then((d) => {
                    this.models = d.data.models;
                });
            }
        });

        this.onFilterClick = function () {
            this.filter.status='aktivan';
            this.filter.type=this.category;
            console.log(this.filter);

             $rootScope.$broadcast('filter_ads',this.filter);
        };


    },
    controllerAs:
        'c'
});