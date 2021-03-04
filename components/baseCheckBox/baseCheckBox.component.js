app.component('baseCheckBox', {
    templateUrl: 'components/baseCheckBox/baseCheckBox.component.html',
    bindings: {
        name: '@?',
        disabled: '<?',
        wrapperClasses: '@?',
        inputClasses: '@?',
        idCheck: "@?",
        label: '@?',
        trueValue: '@?',
        falseValue: '@?',
        ngModel: '=',
        ngChange: '=',
    },
    controller: function ($scope) {
        this.$onChanges = () => {
            $scope.trueValue = $scope.$ctrl.trueValue || true
            $scope.falseValue = $scope.$ctrl.falseValue || false
            
        }
        
        this.$onInit = () => {
            const random = Math.floor(Math.random() * 100000) + 1
            $scope.idCheck = $scope.$ctrl.idCheck || `checkbox_${random}`;
        }
    }
});


