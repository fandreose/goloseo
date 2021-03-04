app.service('users', function ($http, store) {
    /**
     * Aggiornamento password utente
     * 
     * @param {number} id - identificativo utente
     * @param {string} old_password - password corrente.
     * @param {string} new_password - nuova password.
     * 
     * @returns {Object} un oggetto User con i parametri base utente e un 
     * token da usare nell'header di ogni richiesta
     */
    this.changePassword = (id, old_password, new_password, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/users/${id}/update-password`;
        const method = "PATCH";
        const data = {
            old_password, new_password
        }
        if (cb && typeof cb === 'function') {
            $http({
                method,
                url,
                data
            }).then(response => {
                return cb(response);
            }).catch(response => {
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

    /**
     * Aggiornamento password utente
     * 
     * @param {string} email - Email della password che si vuole resettare
     * 
     * @returns {Object} 
     *
     */
    this.forgotPassword = (email, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/user/forgot-password`;
        const method = "post";
        const data = {
            email
        }
        if (cb && typeof cb === 'function') {
            $http({
                method,
                url,
                data
            }).then(response => {
                return cb(response);
            }).catch(response => {
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
     /**
     * Aggiornamento password utente
     * 
     * @param {number} email - Email della password che si vuole resettare
     * @param {varchar} password - Nuova password
     * 
     * @returns {Object} 
     *
     */
    this.resetPassword = (email,password,token, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/user/reset-password`;
        const method = "post";
        const data = {
            email,password,token
        }
        if (cb && typeof cb === 'function') {
            $http({
                method,
                url,
                data
            }).then(response => {
                return cb(response);
            }).catch(response => {
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
     /**
     * Aggiornamento password utente
     * 
     * @param {number} email - Email della password che si vuole resettare
     * @param {varchar} password - Nuova password
     * 
     * @returns {Object} 
     *
     */
    this.verifyToken = (token, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/user/verify-token`;
        const method = "post";
        const data = {
            token
        }
        if (cb && typeof cb === 'function') {
            $http({
                method,
                url,
                data
            }).then(response => {
                return cb(response);
            }).catch(response => {
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
     /**
     * Aggiornamento password utente
     * 
     * 
     * @returns {Object} 
     *
     */
    this.updateAfterResetPassword = (email, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/user/after-reset-password`;
        const method = "PATCH";
        const data = {
            email
        }
        if (cb && typeof cb === 'function') {
            $http({
                method,
                url,
                data
            }).then(response => {
                return cb(response);
            }).catch(response => {
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