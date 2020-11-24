tvzShopApp.component('advertisement', {
    templateUrl: './pages/page.advertisement.template.html',
    controller: function (AdvertisementService,CityCountyService,BrandService, $state, AuthenticationService) {
        this.$onInit = function () {
            this.ad = {};
            this.adTypes =AdvertisementService.advertisementType;
            CityCountyService.fetchCounties().then((d) => {
                if(d.data.status===200){
                    this.counties = d.data.counties;
                }
            });
            this.user = AuthenticationService.getUser();
        };

        this.onAdTypeSelect = function (adType) {
            this.ad={};
            this.ad.type=adType;
            this.ad.contact=this.user.contactNumber;
            this.onClickCounty(this.user.location.county);
            this.ad.location={};
            this.ad.location.county=this.user.location.county;

            BrandService.getBrand(adType).then((d) => {
                if(d.data.status==200){
                    this.brands = d.data.brands;
                }
            });
            if(adType==='Automobili'){
                this.introText='Polja označena sa * su obavezna za unos. TVZShop ti savjetuje da popuniš i sve ostale podatke. To su podaci koje svaki kupac želi znati i nalaze se u PROMETNOJ DOZVOLI vašeg automobila.';
                this.fuelTypes = AdvertisementService.fuelType;
                this.driveTypes = AdvertisementService.driveType;
                this.shiftTypes = AdvertisementService.shiftType;

                this.extraEquipments=['aluminijski naplatci', 'brisač stražnjeg stakla', 'filter protiv prašine', 'sustav za prevenciju od požara', 'follow me home' ,'3. stop svjetlo', 'prednja svjetla za maglu', 'nadzor pritiska u gumama', 'ksenonska svjetla',
                    'bi-ksenonska svjetla', 'LED svjetla', 'prilagodljiva svjetla', 'senzor za svjetlo', 'senzor za kišu', 'navigacija', 'TV', 'putno računalo',
                    'mrežasta pregrada prtljašnjika' ,'krovni nosači', 'kuka za vuču', 'zatamljena stakla', 'upravljač presvučen kožom', 'krovni prozor', 'krovna kutija',
                    'Head-up display', 'Start-stop sistem'];
                this.ad.extraEquipmentList = [];
                this.safetyEquipments= ['alarm', 'blokada motora', 'centralno zaključavanje', 'multilock', 'ABS', 'ESP', 'EDC', 'ETS', 'ASR', 'ASD',
                    'samozatezajući pojasevi', 'isofix'];
                this.ad.safetyEquipmentList = [];
                this.comfortEquipments = ['električno podešavanje sjedala', 'djeljiva stražnja klupa', 'priprema za mobilni aparat',
                    'hadsfree', 'električno podešavanje ogledala', 'električno skapanje ogledala', 'CD izmjenjivač', 'električno podizanje prednjih stakala', 'električno podizanje stražnjih stakala',
                    'upravljač podesiv po visini', 'servo upravljač', 'grijanje ogledala', 'parkirni senzori', 'prednja parkirna kamera', 'stražnja parkirna kamera',
                    'tempomat', 'središnji naslon za ruku', 'kožna sjedala', 'sportska sjedala', 'športsko podvozje', 'grijana sjedala', 'komande na upravljaču'];
                this.ad.comfortEquipmentList = [];
                this.airbagTypes = AdvertisementService.airbagType;
                this.acTypes = AdvertisementService.acType;
                this.radioTypes = AdvertisementService.radioType;
            }else if(adType==='Traktori'){
                this.introText='Polja označena sa * su obavezna za unos. TVZShop ti savjetuje da popuniš i sve ostale podatke. To su podaci koje svaki kupac želi znati i nalaze se u PROMETNOJ DOZVOLI vašeg traktora.';
                this.ad.eqipmentList = [];
                this.equipments = ['4x4 pogon', 'klima', 'kabina', 'prednji hidraulik', 'prednji utovarivač', 'prednje priključno vratilo', 'hidraulični servo upravljač', 'EHR - elektronska regulacija hidraulika'];
            }else if(adType==='Računala' || adType==='Mobilni telefoni'){
                this.introText='Polja označena sa * su obavezna za unos. TVZ Oglasnik ti savjetuje da popuniš i sve ostale podatke. To su podatci koje svaki kupac želi saznati i pridonose vjerojatnosti prodaje.';
            }
        };

        this.isAdType = function (adTypeId) {
            return this.ad.type === adTypeId;
        };

        this.onBrandSelect = function (brandName) {
            this.ad.model='';
            if(brandName === undefined || brandName==='Ostalo'){
                this.ad.brand='';
                return;
            }
            this.ad.brand=brandName;

            if(this.ad.type==='Automobili') {
                BrandService.getModels(brandName).then((d) => {
                    if (d.data.status == 200) {
                        this.models = d.data.models;
                    } else {
                        this.models = [];
                    }
                });
            }
        };

        this.getChoosenEquipmentArray = function (type) {
            if(type==='extra'){
                return this.ad.extraEquipmentList;
            }else if(type==='safety'){
                return this.ad.safetyEquipmentList;
            }else if(type==='comfort'){
                return this.ad.comfortEquipmentList;
            }else if(this.ad.type==='Traktori'){
                return this.ad.eqipmentList;
            }else{
                return [];
            }
        };

        this.onEquipmentSelect = function (name, type) {
            let idx;
            if(name === 'nema klime'){
                this.acTypes.forEach(type => {
                    idx = this.ad.comfortEquipmentList.indexOf(type);
                    console.log(idx);
                    if(idx !== -1){
                        this.ad.comfortEquipmentList.splice(idx, 1);
                    }
                });
                return;
            }else if(name === 'nema radio uređaja'){
                this.radioTypes.forEach(type => {
                    idx = this.ad.comfortEquipmentList.indexOf(type);
                    if(idx !== -1){
                        this.ad.comfortEquipmentList.splice(idx, 1);
                    }
                });
                return;
            }else if(name == 'nema zračnih jastuka'){
                this.airbagTypes.forEach(type => {
                    idx = this.ad.safetyEquipmentList.indexOf(type);
                    if(idx !== -1){
                        this.ad.safetyEquipmentList.splice(idx, 1);
                    }
                });
                return;
            }

            idx = this.getChoosenEquipmentArray(type).indexOf(name);
            if (idx > -1) {
                this.getChoosenEquipmentArray(type).splice(idx, 1);
            } else {
                this.getChoosenEquipmentArray(type).push(name);
            }
        };

        this.getRegistrationDates = function () {
            let year = new Date().getFullYear();
            let month = new Date().getMonth();
            let dates = [];
            for (let i = month + 1; i < 13; i++) {
                dates.push(i + '/' + year);
            }
            for (let i = 1; i < month + 2; i++) {
                dates.push(i + '/' + (year + 1));
            }
            return dates;
        };

        this.onClickCounty = function (county) {
            if (county != undefined) {
                CityCountyService.fetchCities(county).then((d) => {
                    if(d.data.status==200){
                        this.cities = d.data.cities;
                        if(this.user.location.county===county)
                            this.ad.location.city=this.user.location.city;
                    }
                });
            }
        };

        this.saveNewAd = function () {
            AdvertisementService.saveAd(this.ad);
            $state.go('home');
        };

    },
    controllerAs: 'c'

});