app.component('datePicker', {
    templateUrl: 'components/datePicker/datePicker.component.html',
    bindings: {
        name: '@?',
        disabled: '<',
        inputClasses: '@?',
        wrapperClasses: '@?',
        placeholder: '@?',
        ngModel: '=',
        idDatePicker: "<",
        label: '<'
    },
    controller: function ($scope, $translate, $element) {
        this.$doCheck = () => {
            $.fn.datepicker.defaults.language = $translate.instant('vendors.datepicker.language');
            $($element).datepicker("update", moment($scope.$ctrl.ngModel).format($translate.instant('vendors.datepicker.format')));

            $($element).datepicker({
                autoclose: true,
                language: $translate.instant('vendors.datepicker.language'),
            }).on("changeDate", function (e) {
                $scope.$ctrl.ngModel = moment(e.date).toDate();
                $scope.$evalAsync()
            });
        }
    }
});


