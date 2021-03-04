app.component('baseRadioButton', {
    templateUrl: 'components/baseRadioButton/baseRadioButton.component.html',
    bindings: {
        radioButtonValue: '<',
        name: '@',
        disabled: '<',
        inputClasses: '@',
        wrapperClasses: '@',
        idRadio: "@",
        label: '@',
        radioValue: "<",
        ngModel: '=',
        
    },
    controller: function ($scope) {
        this.$onInit = () => {
            const random = Math.floor(Math.random() * 100000) + 1
            $scope.idRadio = $scope.$ctrl.idRadio || `radio_${random}`;
        }
    }

});


