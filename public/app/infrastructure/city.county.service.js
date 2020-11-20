class CityCountyService {
    constructor($http){
        this.http=$http;
    }

    fetchCounties(){
        return this.http.get('/api/counties', {cache:false});
    };

    fetchCities(county){
        return this.http.get("api/counties/" + county + "/cities");
    }
}
tvzShopApp.service('CityCountyService', CityCountyService);


