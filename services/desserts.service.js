app.service('desserts', function ($http, store) {
    
    /**
     * Fornisce l'elenco dei dolci
     * 
     * @param {function} [cb] callback facoltativa 
     */
    this.getAll = (cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/desserts`;
        const method = "GET";
        const params = {}
        if (cb && typeof cb === 'function') {
            $http({
                method,
                url,
                params
            }).then(response => {
                return cb(response);
            }).catch(response => {
                return cb(response);
            });
        } else {
            return $http({
                method,
                url,
                params
            })
        }
    }

    /**
     * Crea una nuova torta
     * 
     * @param {string} name nome della torta 
     * @param {string} description descrizione della torta
     * @param {string} ingredientsIdList lista di ingredienti da cui è composta. contiene una stringa di id separati da virgola
     * @param {function} [cb] callback facoltativa 
     */
    this.createOne = (name, description, ingredientsIdList, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/desserts`;
        const method = "POST";
        const data = {
            name, description, ingredientsIdList
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
     * Aggiorna tutti i campi di una torta già fatta
     * @param {number} id 
     * @param {string} name 
     * @param {string} description 
     * @param {string} ingredientsIdList 
     * @param {function} [cb] callback facoltativa 
     */
    this.updateOne = (id, name, description, ingredientsIdList, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/desserts/${id}`;
        const method = "PUT";
        const data = {
            name, description, ingredientsIdList
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

    this.deleteOne = (id, cb) => {
        const url = `${store.getConfig().API_BASE_URL}/api/v1/desserts/${id}`;
        const method = "DELETE";
        const data = {}
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
