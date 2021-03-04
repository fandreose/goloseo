app.constant("isActiveConfig", {
        activeClass: "active"
    })
    .directive("isActive", function ($location, $rootScope, isActiveConfig) {
        return {
            restrict: "A",
            link: function (scope, element, attr) {
                if (element[0].nodeName.toLowerCase() !== "a") {
                    return;
                }
                var locWatch = $rootScope.$on("$locationChangeSuccess", function (event, newUrl) {
                    var href = element.prop('href');
                    if (newUrl.startsWith(href)) {
                        attr.$addClass(name);
                    } else {
                        attr.$removeClass(name);
                    }
                });
                var name = attr.isActive || isActiveConfig.activeClass || "active";
                scope.$on("$destroy", locWatch);
            }
        }
    })
    .config([
        "$routeProvider",
        "roles",
        function config($routeProvider, roles) {
            $routeProvider
                .when("/", {
                    templateUrl: "/views/desserts.html",
                    controller: "publicDessertsListCtrl",
                    public: true
                })
                .when("/login", {
                    templateUrl: "/views/login.html",
                    controller: "loginCtrl",
                    public: true
                })
                .when("/reset-password", {
                    templateUrl: "/views/users/password/resetPassword.html",
                    controller: "resetPasswordCtrl",
                    public: true
                })
                .when("/forgot-password", {
                    templateUrl: "/views/users/password/forgotPassword.html",
                    controller: "forgotPasswordCtrl",
                    public: true
                })
                .when("/profile", {
                    templateUrl: "/views/users/profile.html",
                    controller: "profileCtrl",
                    public: false
                })
                .when("/admin", {
                    templateUrl: "/views/admin.html",
                    controller: "adminCtrl",
                    public: false
                })
                .when("/admin/desserts", {
                    templateUrl: "/views/admin/desserts/list.html",
                    controller: "dessertsListCtrl",
                    public: false
                })
                .when("/admin/desserts/new", {
                    templateUrl: "/views/admin/desserts/new.html",
                    controller: "dessertsNewCtrl",
                    public: false
                })
                .when("/admin/desserts/:id/edit", {
                    templateUrl: "/views/admin/desserts/edit.html",
                    controller: "dessertsEditCtrl",
                    public: false,
                    excludedRoles: [roles.shiftSupervisor]
                })
                .otherwise("/");
        }
    ])
    .run(function ($rootScope, $location, store, $http) {
        // register listener to watch route changes
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            let token = store.getToken();
            $http.defaults.headers.common.Authorization = token;

            // Alcune pagine sono pubbliche, non hanno bisogno di una login
            // Se non ho un token e la pagina non è pubblica mando alla pagina di login
            if (!token && !next.public) {
                event.preventDefault();
                store.setError("Token non valido")
                $location.path("/login");
            }

            // Ok, utente autenticato o è su una pagina che non ha restrizioni. Verifico se l'utente ha i ruoli per vedere la pagina
            excludedRoles = next.excludedRoles
            user = store.getUser()
            // se tra i ruoli esclusi dalla rotta c'è quello dell'utente lo rimando in home
            if (excludedRoles && next.excludedRoles.includes(user.role.code)) {
                $location.path("/");
            }
        });
    })
    .config(['$locationProvider', function ($locationProvider) {
        // tolgo il ! dalle rotte
        $locationProvider.hashPrefix('');
    }])
