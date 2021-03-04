app.controller("mainCtrl", function ($scope, $rootScope, $location, $translate, store) {
        /***********************************
         *  Definizione variabili
         ***********************************/

        $scope.state = {
            sidebar: false,
            navbar: false,
            user: {},
            year: new Date().getFullYear()
        }

        /***********************************
         *  Listeners
         ***********************************/

        $rootScope.$on('tokenChanged', (event, data) => {
            init();
        })

        $rootScope.$on('toggleSidebar', (event, data) => {
            setSidebar();
        })

        $rootScope.$on('logout', (event, data) => {
            init();
            $location.path("/login");
        })

        $rootScope.$on('userChanged', (event, data) => {
            setUser(data);
        })

        /***********************************
         *  Funzioni accessibili da controller figli
         *  con il comando $scope.$parent.nomeFunzione
         ***********************************/

        $scope.closeModal = (modalId) => {
            $(`#${modalId}`).modal('hide')
        }

        /***********************************
         *  Funzioni interne
         ***********************************/

        setNavbar = () => {
            $scope.state.navbar = store.getToken() && store.getToken().length > 0;
        }

        setSidebar = () => {
            $scope.state.sidebar = $scope.state.navbar && store.getSidebar();
        }

        setUser = (user) => {
            $scope.state.user = user || store.getUser();
        }

        init = () => {
            setNavbar()
            setSidebar()
            setUser()
        }

        /***********************************
         *  Funzioni visibili dal frontend
         ***********************************/

        $scope.logout = () =>{
            store.logout();
        }

        $scope.toggleSidebar = () => {
            store.toggleSidebar();
        }
        
        $scope.changeLanguage=(language)=>{
            $translate.use(language);
        }
        
        init();
    });