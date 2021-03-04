app.controller("forgotPasswordCtrl", function ($scope, store, $toastr, $translate, users) {
    $scope.state = {
        email: null,
        sent:false
    }

    $scope.sendEmail = () => {
        users.forgotPassword(
            $scope.state.email
        ).then(response => {
            $scope.state.sent=true
        }).catch(response => {
            console.log(response)
        })
    }

}).controller("resetPasswordCtrl", function ($scope, $routeParams, $location, store, $http, users, authentication, errorHandler) {
    $scope.state = {
        password: null,
        email: null
    };


    $scope.salvaPassword = () => {
        users.verifyToken($routeParams.token)
            .then(response => {
                $scope.state.email = response.data.recordsets[0][0].mailAddress
                return users.resetPassword($scope.state.email, $scope.state.password, $routeParams.token);
            }).then(response => {
                return authentication.login($scope.state.email, $scope.state.password)
            }).then(response => {
                var token = response.data.token;
                store.setError(null);
                store.setToken(token);
                store.setUser(response.data.user);
                $http.defaults.headers.common.Authorization = token;
                return users.updateAfterResetPassword($scope.state.email)
            }).then(response => {
                $location.url($location.path("/"));
            }).catch(res => {
                errorHandler.responseError(res)
            })
    }

})

