tvzShopApp.component('brandList', {
    templateUrl: './components/brandList.template.html',
    bindings: {
        category: '@'
    },
    controller: function (BrandService, $scope) {
        this.$onInit = function(){
            if(this.category==='Automobili'){
                this.introText='Prodaja automobila u malim oglasima sa slikama i cijenom oglasa. Velik izbor rabljenih osobnih vozila na oglasniku TVZShop.';
            }else if(this.category==='Traktori'){
                this.introText='Prodaja rabljenih traktora u malim oglasima sa slikama i cijenom oglasa. Velik izbor vozila na oglasniku TVZShop.';
            }else if(this.category==='Računala'){
                this.introText='Prodaja prijenosnih računala. Laptopi i prijenosnici u malim oglasima sa slikama i cijenama prijenosnih računala.';
            }else if(this.category==='Mobilni telefoni'){
                this.introText='Prodaja mobitela. Mobiteli u malim oglasima sa slikama i cijenama.';
            }
            BrandService.getBrand(this.category).then((d)=> {
                this.brands=d.data.brands;
            });
        };

        this.getColumnBrands = function(columnId){
          if(!this.brands){
              return [];
          }
          let numberOfColumns = 10;
          let numberOfItemsInColumn=parseInt(this.brands.length/numberOfColumns) + 1;
          if(columnId===1){
              return this.brands.slice(0, numberOfItemsInColumn-1);
          }else if(columnId===numberOfColumns){
              return this.brands.slice(numberOfItemsInColumn*(columnId-1)-1, this.brands.length);
          }
          return this.brands.slice(numberOfItemsInColumn*(columnId-1)-1, numberOfItemsInColumn*columnId-1);

        };

        //u categoray da je odabran brand
        this.onBrandItemClick=function (brandName) {
          $scope.$emit('brand_item_selected', brandName);
        };


    },
    controllerAs:
        'c'
});