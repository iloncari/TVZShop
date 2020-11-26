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
        <div id="advertisement_item" ng-repeat="advertisement in c.advertisements">
            <div id="ad-item-title-section">
                <h4 ui-sref="detail({adId:advertisement._id})">{{advertisement.title}}</h4>      
            </div>     
            <div ui-sref="detail({adId:advertisement._id})" id="ad-data-all">
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
            <input ng-if="c.filter.userId" class="delete-btn" ng-click="c.deleteAd(advertisement._id)" style="background-color: #ff725e;" type="button" value="Izbriši">
            <input ng-if="c.filter.userId && c.filter.status!='prodan'" class="sold-btn" ng-click="c.markAsSold(advertisement._id)" style="background-color: #92ff94;" type="button" value="Oznaci kao prodan">
            <input ng-if="c.user" class="favorite-btn" ng-class="c.getFavoriteClass(advertisement._id)" ng-click="c.onFavoriteClick(advertisement._id)"  type="button" value="{{c.favoriteText}}">
        </div>
    `,
    bindings: {
        filter: '<',
        title: '@',
        empty: '@',
        results: '@'
    },
    controller: function (AdvertisementService,AuthenticationService, $scope) {

        this.$onInit = function(){
            this.adTitle = this.title + " - svi";
            this.user = AuthenticationService.getUser();
            this.advertisements=[];
            if(this.filter.adId  && Array.isArray(this.filter.adId) && this.filter.adId.length===0){
                return;
            }
            this.getAds(this.filter);
        };

        this.getAds = function(filter){
           AdvertisementService.getAds(filter).then((d)=> {
                this.advertisements = d.data.advertisements;
                this.adTitle = this.advertisements.length===0 ? '' :  this.title + " - " + (filter.brand===undefined ? 'svi' : filter.brand);
            });
        };

        $scope.$on('brand_item_selected1', (e, brand) => {
            this.filter.brand=brand;
            this.getAds(this.filter);
            this.adTitle = this.title + " - " + (brand==='' ? 'svi' : brand);
        });


        $scope.$on('filter_ads1', (e, f) => {
            this.filter = {};
            this.getAds(f);
        });

        this.onFavoriteClick = function (adId) {
            if(this.isInFavorites(adId)){
                AdvertisementService.removeFromFavorites(adId, AuthenticationService.getUser());
                let indx = this.user.favorites.findIndex(id => id == adId);
                this.advertisements.splice(indx, 1);
            }else {
                AdvertisementService.markAdAsFavorite(adId, AuthenticationService.getUser());
            }


        };

        this.getFavoriteClass = function (adId) {
          return this.isInFavorites(adId) ? 'favorite-active' : '';
        };

        this.isInFavorites = function (adId) {
            let indx = this.user.favorites.findIndex(id => id == adId);
            if(indx===-1){
                this.favoriteText='Dodaj u favorite';
                return false;
            }else{
                this.favoriteText='Ukloni iz favorita';
                return true;
            }
        };


        this.markAsSold = function (adId) {

            let indx = this.advertisements.findIndex(ad => ad._id == adId);
            let ad = this.advertisements[indx];
            ad.status = 'prodan';

            AdvertisementService.updateAd(adId, ad).then((d) => {
                if(d.data.status===201){
                    this.advertisements.splice(indx, 1);
                }
            });
        };

        this.deleteAd = function (adId) {
            let indx = this.advertisements.findIndex(ad => ad._id == adId);
            let ad = this.advertisements[indx];
            AdvertisementService.deleteAdById(adId).then((d) => {
               if(d.data.status===200){
                   this.advertisements.splice(indx, 1);
               }
            });

        };
    },
    controllerAs:
        'c'
});