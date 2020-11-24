class AdvertisementService {
    constructor($http, $rootScope, AuthenticationService) {
        this.http = $http;
        this.rootScope = $rootScope;
        this.authenticationService = AuthenticationService;
        this.advertisementType = ["Automobili", 'Traktori', 'Računala', 'Mobilni telefoni'];
        this.fuelType = ['Dizel', 'Benzin','Hibrid', 'Električni','Plin'];
        this.driveType= ['Prednji pogon', 'Zadnji pogon', '4x4'];
        this.shiftType = [ 'Mehanički',  'Automatski'];
        this.airbagType = ['nema zračnih jastuka',  'vozački zračni jastuci',  'vozački + suvozački zračni jastuci',  'vozački + suvozački + bočni zračni jastuci'];
        this.acType = ['nema klime', 'ručna klima', 'automatska klima'];
        this.advertisementStatus = ['aktivan',  'prodan',  'sakriven'];
        this.radioType = ['nema radio uređaja',   'autradio/kazetofon',  'autoradio/CD',  'autoradio/CD/MP3',
         'autoradio/CD/MP3/DVD'];
    }

    updateAd(id, ad){
        return this.http.put('api/advertisement?id='+id, {ad:ad});
    }
    getAds(filter){
        let brand = filter.brand ? 'brand=' + filter.brand + '&' : '';
        let model = filter.model ? 'model=' + filter.model + '&' : '';
        let minPrice = filter.minPrice ? 'minPrice=' + filter.minPrice + '&' : '';
        let maxPrice = filter.maxPrice ? 'maxPrice=' + filter.maxPrice + '&' : '';
        let minYear = filter.minYear ? 'minYear=' + filter.minYear + '&' : '';
        let maxYear = filter.maxYear ? 'maxYear=' + filter.maxYear + '&' : '';
        let minKm = filter.minKm ? 'minKm=' + filter.minKm + '&' : '';
        let maxKm = filter.maxKm ? 'maxKm=' + filter.maxKm + '&' : '';
        let minPower = filter.minPower ? 'minPower=' + filter.minPower + '&' : '';
        let maxPower = filter.maxPower ? 'maxPower=' + filter.maxPower + '&' : '';
        let fuelType = filter.fuelType ? 'fuelType=' + filter.fuelType + '&' : '';
        let minWh = filter.minWh ? 'minWh=' + filter.minWh + '&' : '';
        let maxWh = filter.maxWh ? 'maxWh=' + filter.maxWh + '&' : '';
        let minRam = filter.minRAM ? 'minRAM=' + filter.minRAM + '&' : '';
        let maxRam = filter.maxRAM ? 'maxRAM=' + filter.maxRAM + '&' : '';
        let minHd = filter.minHD ? 'minHD=' + filter.minHD + '&' : '';
        let maxHd = filter.maxHD ? 'maxHD=' + filter.maxHD + '&' : '';
        let minSsd = filter.minSSD ? 'minSSD=' + filter.minSSD + '&' : '';
        let maxSsd = filter.maxSSD ? 'maxSSD=' + filter.maxSSD + '&' : '';
        let minScreen = filter.minScreen ? 'minScreen=' + filter.minScreen + '&' : '';
        let maxScreen = filter.maxScreen ? 'maxScreen=' + filter.maxScreen + '&' : '';
        let status = filter.status ? 'status=' + filter.status + '&' : '';
        let type = filter.type ? 'type=' + filter.type + '&' : '';
        let limit = filter.limit ? 'limit=' + filter.limit + '&' : '';
        let adId = filter.adId ? 'adId=' + filter.adId + '&' : '';
        let userId = filter.userId ? 'userId=' + filter.userId + '&' : '';
        let queryParams = '?'+brand+model+minPrice+maxPrice+minYear+maxYear+minKm+maxKm+minPower+maxPower+fuelType+minWh+maxWh
        +minRam+maxRam+minHd+maxHd+minSsd+maxSsd+maxScreen+minScreen+type+status+adId+limit+userId;
        queryParams=queryParams.slice(0, -1);
        return this.http.get("api/advertisement"+queryParams);
    }

    getAdById(id) {
        return this.http.get("api/details?id="+id);
    }

    deleteAdById(id){
        return this.http.delete("api/advertisement?id="+id);
    }

    saveAd(ad){
        ad.userId=this.authenticationService.getUser()._id;
        ad.status='aktivan';
        return this.http.post('api/advertisement', {ad: ad});
    }
}

tvzShopApp.service('AdvertisementService', AdvertisementService);