app.component('baseModal', {
    templateUrl: 'components/baseModal/baseModal.component.html',
    transclude: true,
    bindings: {
        title: '@',
        id:'@',
        buttonSaveText:'@',
        buttonSaveClass:'@',
        buttonCancelText:'@',
        buttonCancelClass:'@',
    },
    controller: function ($scope) {
        $scope.onSubmitted = function() {
            $scope.$emit('modalSubmit', $scope.$ctrl.id);
        };
    }
})
    
