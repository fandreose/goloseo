app.service('authentication', function ($http, store) {
    /**
     * Login utente
     * 
     * @param {string} username - username utente.
     * @param {string} password - password utente.
     * 
     * @returns {Object} un oggetto User con i parametri base utente e un 
     * token da usare nell'header di ogni richiesta
     */
    this.login = (username, password, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/login`;
        const method = "POST";
        const data = {
            username,
            password
        }
        if (cb && typeof cb === 'function') {
            $http({
                method,
                url,
                data
            }).then(response => {
                return cb(response);
            }).catch( response => {
                return cb(response);
            });
        } else {
            return $http({
                method,
                url,
                data
            })
        }
    }

})