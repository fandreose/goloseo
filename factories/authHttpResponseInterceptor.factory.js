app.factory('authHttpResponseInterceptor', ['$q', '$location','store', function ($q, $location,store) {
    return {
        response: function (response) {
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            if (rejection.status === 401) {
                console.log("Response Error 401", rejection);
                store.setError("Non hai l'autorizzazione ad entrare nella pagina")
                $location.path('/login').search('returnTo', $location.path());
            }
            return $q.reject(rejection);
        }
    }
}])