app.component('baseToggle', {
    templateUrl: 'components/baseToggle/baseToggle.component.html',
    bindings: {
        name: '@?',
        disabled: '<?',
        wrapperClasses: '@?',
        inputClasses: '@?',
        ngModel: '='
    }
})