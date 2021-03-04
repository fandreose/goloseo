app.component('baseInput', {
    templateUrl: 'components/baseInput/baseInput.component.html',
    bindings: {
        name: '@',
        disabled: '=',
        type: '@',
        placeholder: '@',
        wrapperClasses: '@?',
        inputClasses: '@',
        value: '=',
        label: '@',
        error: '@',
        valid: '=',
        leftIcon: '@',
        rightIcon: '@',
        ngModel: '=',
        required: '<?'
    },
    controller: function ($scope, $toastr, $q, analysisItems) {
        $scope.visible = 0;
        
        $scope.changeType = () => {
            if ($scope.visible == 0) {
                $scope.visible = 1
                $scope.$ctrl.type = "text"
            }
            else {
                $scope.visible = 0
                $scope.$ctrl.type = "password"
            }
        }
        
    }
});


