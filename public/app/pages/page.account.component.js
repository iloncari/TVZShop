tvzShopApp.component('account', {
    templateUrl: './pages/page.account.template.html',
    controller: function (AdvertisementService, AuthenticationService, $rootScope) {
        this.$onInit = function () {
            this.user = AuthenticationService.getUser();
            this.activeFilter={};
            this.activeFilter.userId = this.user._id;
            this.activeFilter.status='aktivan';

            this.soldFilter={};
            this.soldFilter.userId = this.user._id;
            this.soldFilter.status='prodan';

            this.selectedTab='active';
            document.getElementById('activeBtn').className += " active";
        };

        this.openTab = function (evt, tabId, status) {
            this.selectedTab=tabId;
            let i, tablinks;
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            evt.target.className += " active";
        };
    },
    controllerAs: 'c'

});