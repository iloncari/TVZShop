class BrandService {
    constructor($http) {
        this.http = $http;
    }

    getBrand(brandType){
        return this.http.get("api/brand/"+brandType);
    }

    getModels(brandName){
        return this.http.get('api/brand/'+brandName+'/models')
    }

    getActiveAds(adType, adStatus){
        return this.http.get("api/advertisement?type="+adType+"&status="+adStatus);
    }

    deleteAd(id){
        this.http.delete("api/advertisement/"+id);
    }
}

tvzShopApp.service('BrandService', BrandService);