tvzShopApp.component('adList', {
    template: `
    <h4 ng-if="c.title">{{c.title}}</h4>
    <section ng-if="!c.advertisements || c.advertisements.length===0" id="empty-ads-list">{{c.empty}}</section>
    <section ng-if="c.advertisements.length!=0 && c.results==='true'" id="counter-ad">
        <div id="ad-number">
                <div id="ad-number-div">
                    {{c.advertisements.length}} oglasa
                </div>
                <div id="ad-brand-div">
                    {{c.adTitle}}
                </div>
                <br style="clear: left;"/>
            </div>
    </section>
    <section id="advertisements">
        <div id="advertisement_item" ui-sref="detail({adId:advertisement.id})" ng-repeat="advertisement in c.advertisements">
            <h4>{{advertisement.title}}</h4>
            <div id="ad-data-all">
                <div id="ad-image">
                   <img ng-src="{{advertisement.image}}"/>
                </div> 
                <div id="ad-data-infos">
                    <p ng-if="advertisement.type==='Automobili'">Rabljeno vozilo, {{advertisement.km}} km</p>
                    <p ng-if="advertisement.type==='Automobili'">Godište automobila: {{advertisement.year}}</p>
                    <p ng-if="advertisement.type==='Traktori'">Rabljeno vozilo, {{advertisement.wh}} radnih sati</p>
                    <p ng-if="advertisement.type==='Traktori'">Godište traktora: {{advertisement.year}}</p>
                    <p ng-if="advertisement.year && (advertisement.type==='Mobilni telefoni' || advertisement.type==='Računala')">Uređaj proizveden {{advertisement.year}}</p>
                    <p ng-if="(advertisement.type==='Mobilni telefoni' || advertisement.type==='Računala')">Procesor: {{advertisement.procesor}}</p>
                    <p ng-if="(advertisement.type==='Mobilni telefoni' || advertisement.type==='Računala')">RAM: {{advertisement.ram}} GB</p>
                    <p ng-if="advertisement.graphic && (advertisement.type==='Mobilni telefoni' || advertisement.type==='Računala')">Grafika: {{advertisement.graphic}}</p>
                    <p>Lokacija: {{advertisement.location.city}},{{advertisement.location.county}}</p>
                    <p>Objavljen: {{advertisement.date}}</p>
                </div>
                <div id="ad-data-price">
                    {{advertisement.price}} kn
                </div>
            </div>
             <button ng-if="this.filter.userId" type="button" class="btn btn-danger" ng-click="c.deleteAd(advertisement._id)">Izbrisi</button>
             <button ng-if="this.filter.userId && this.filter.status!='prodan'" type="button" class="btn btn-secondary" ng-click="c.markAsSold(advertisement._id)">Označi prodanim</button>
        </div>
    `,
    bindings: {
        filter: '<',
        title: '@',
        empty: '@',
        results: '@'
    },
    controller: function (AdvertisementService, $scope) {
        this.$onInit = function(){
            this.adTitle = this.title + " - svi";
            this.advertisements=[];
            this.getAds(this.filter);
        };

        this.getAds = function(filter){
            AdvertisementService.getAds(filter).then((d)=> {
                this.advertisements = d.data.advertisements;
                this.adTitle = this.advertisements.length===0 ? '' :  this.title + " - " + (filter.brand===undefined ? 'svi' : filter.brand);
            });
        };

//iz kategorije je doslo da je u listi selecramn brand
        $scope.$on('brand_item_selected1', (e, brand) => {
            console.log("selecta brand "  + brand);
            this.filter.brand=brand;
            this.getAds(this.filter);
            this.adTitle = this.title + " - " + (brand==='' ? 'svi' : brand);
        });



        $scope.$on('filter_ads1', (e, f) => {
            console.log("aDlIST DOHVATI CU");
            this.filter = {};
            this.getAds(f);
        });




        this.markAsSold = function (adId) {
            let indx = this.advertisements.findIndex(ad => ad._id == adId);
            let ad = this.advertisements[indx];
            ad.status = 'prodan';


                        this.advertisements.splice(indx, 1);

            /**AdvertisementService.updateAd(ad).then((d) => {
                if(d.data.status===201){
                    this.advertisements.splice(indx, 1);
                }
            });
             };**/
        };

        this.deleteAd = function (adId) {
            // AdvertisementService.deleteAd(adId);

            let indx = this.advertisements.findIndex(ad => ad._id == adId);
            let ad = this.advertisements[indx];
            if(ad){
                this.advertisements.splice(indx, 1);
                return;
            }
        };
    },
    controllerAs:
        'c'
});