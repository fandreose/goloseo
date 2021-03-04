app.component('baseSelect', {
    templateUrl: 'components/baseSelect/baseSelect.component.html',
    transclude: {
        'template': '?selectTemplate'
    },
    bindings: {
        name: '@?',
        disabled: '<?',
        placeholder: '@?',
        wrapperClasses: '@?',
        groupBy: '<?',
        value: "=",
        label: '@',
        items: "=",
        optionId: "@?",
        optionLabel: "@?",
        ngModel: '=',
        required: '<?'
    },
    controller: function($scope) {
        this.$onChanges = (previousValue, currentValue) => {
            $scope.optionId = $scope.$ctrl.optionId || 'id'
            $scope.optionLabel = $scope.$ctrl.optionLabel || 'label'
        }
    }
});


