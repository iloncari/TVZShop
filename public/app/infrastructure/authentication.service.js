class AuthenticationService {

    constructor($http, $state, $rootScope, $timeout){
        this.http=$http;
        this.user=null;
        this.state=$state;
        this.rootScope=$rootScope;
        this.timeout=$timeout;
        this.token='';
    }

    isAuthenticated(){
        return sessionStorage.getItem('token') ? true : false;
    }

    getUser(){
        if (this.user) return this.user;
    }

    getToken(){
        return this.token;
    }

    getUserById(id){
        return this.http.get('/authenticate/user/'+id);
    }

    updateUser(user){
        return this.http.put('/authenticate/user?id='+user._id, {user:user});
    }

    login(user){
        this.http.post('/authenticate/login',{user:user}).then((d) => {
            this.rootScope.$broadcast('auth_message', d.data);
            if (d.data.status==200){
                this.user=d.data.user;
                this.token=d.data.token;
                sessionStorage.setItem('token',this.token);
                this.rootScope.$broadcast('login_status', true);
                this.state.go('home');
            }else{
                this.rootScope.$broadcast('login_status', false);
            }
        });
    }

    register(user){
        return this.http.post('/authenticate/register',{user:user});
    }

    logout(){
        sessionStorage.removeItem('token');
        this.user=null;
        this.token=null;
        this.rootScope.$broadcast('login_status', false);
        this.state.go('login');
    }
}

tvzShopApp.service('AuthenticationService', AuthenticationService);


