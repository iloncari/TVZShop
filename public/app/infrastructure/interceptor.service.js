class InterceptorService {
    constructor($state, $q){
        this.state=$state;
        this.q=$q;
    }

    request = function(config){
        console.log("requiest");
        console.log(config);
        const token=sessionStorage.getItem('token');
        if (token) config.headers['x-access-token'] = token;
        console.log(config);
        return config;
    };

    responseError = function (response) {
        console.log("responeeEroor");
        console.log(response);
        if (response.status == 403){
            sessionStorage.removeItem('token');
            this.state.go('login');
        }
        console.log(response);

        return this.q.reject(response);
    }
}

tvzShopApp.service('interceptorService',InterceptorService);


