app.controller("adminCtrl", function ($scope, store) {
    $scope.state = {
        user: store.getUser()
    }
});