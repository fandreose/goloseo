app.component('baseTextarea', {
    templateUrl: 'components/baseTextarea/baseTextarea.component.html',
    bindings: {
        name: '<',
        disabled: '<',
        rows: '<',
        placeholder: '<',
        wrapperClasses: '<',
        inputClasses: '<',
        ngModel: '=',
        label: '<',
        error: '<',
        valid: '<',
        required: '<'
    }
});
