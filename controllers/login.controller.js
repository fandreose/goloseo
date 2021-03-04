app.controller("loginCtrl", function ($scope, store, $rootScope, $location, authentication, $http,errorHandler) {
    $scope.state = {
        username: null,
        password: null,   
        error: store.getError(),
        isLoading: false
    };

    $scope.login = () => {
        $scope.state.isLoading = true;
        authentication.login(
            $scope.state.username, 
            $scope.state.password
        ).then(response => {
            $scope.state.isLoading = false;
            var token = response.data.token;
            $scope.state.error = null;
            store.setError(null);
            store.setToken(token);
            store.setUser(response.data.user);
            $http.defaults.headers.common.Authorization = token;
            $location.path("/");
        })
        .catch(response => {
            $scope.state.isLoading = false;
            $scope.state.error = response && response.data ? response.data.recordset[0].ErrDescr : 'Uh oh, qualcosa è andato storto. Riprova tra qualche minuto'
            errorHandler.responseError(response)
        })
    }
    
    
})

