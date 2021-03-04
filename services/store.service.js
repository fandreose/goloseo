app.service('store', function ($rootScope, roles, crypto) {

    let token;
    let sidebar;
    let user;
    let error;
    let language = 1;
    
    let config;
    this.logout = () => {
        this.setToken(null)
        let config = this.getConfig();
        localStorage.clear();
        this.setConfig(config)
        $rootScope.$emit('logout', token);
    }

    this.setConfig = (config) => {
        this.config = config;
        localStorage.setItem("config", JSON.stringify(config));
    }

    this.getConfig = () => {
        return config || (localStorage.getItem("config") && JSON.parse(localStorage.getItem("config")));
    }

    this.setToken = (value) => {
        token = value;
        localStorage.setItem("token", token);
        $rootScope.$emit('tokenChanged', token);
    }

    this.getToken = () => {
        return token || localStorage.getItem("token");
    }

    this.setError = (value) => {
        error = value;
        localStorage.setItem("error", error);
        $rootScope.$emit('errorChanged', error);
    }

    this.getError = () => {
        return error || localStorage.getItem("error");
    }

    this.setLanguage = (value) => {
        language = value;
        localStorage.setItem("language", language);
        $rootScope.$emit('languageChanged', language);
    }

    this.getLanguage = () => {
        return language || localStorage.getItem("language");
    }

    this.toggleSidebar = () => {
        this.setSidebar(!sidebar)
        $rootScope.$emit('toggleSidebar', sidebar);
    }

    this.setSidebar = (value) => {
        sidebar = value
        localStorage.setItem("sidebar", sidebar)
    }

    this.getSidebar = () => {
        return this.sidebar || (localStorage.getItem("sidebar") && "true" == localStorage.getItem("sidebar")) || false;
    }

    this.getUser = () => {
        const salt = this.getToken() && this.getToken().split(".")[0];
        const myDecipher = salt && crypto.decipher(salt)
        return user || (localStorage.getItem("user") && JSON.parse(myDecipher(localStorage.getItem("user"))));
    }

    this.setUser = (user) => {
        const salt = this.getToken() && this.getToken().split(".")[0];
        const myCipher = salt && crypto.cipher(salt)
        const role = user.role;
        user.isManager = role?.code == roles.manager; // Direzione
        user.isEmployee = role?.code == roles.employee; // Impiegato
        user.isShiftSupervisor = role?.code == roles.shiftSupervisor // Capo turno
        user.isWorker = role?.code == roles.worker // Operaio

        localStorage.setItem("user", myCipher(JSON.stringify(user)));
        $rootScope.$emit('userChanged', user);
    }
});