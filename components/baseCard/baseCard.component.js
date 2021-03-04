app.component('baseCard', {
    templateUrl: 'components/baseCard/baseCard.component.html',
    transclude: {
        'header': '?cardHeader',
        'body': 'cardBody',
        'footer': '?cardFooter'
    },
    bindings: {
        cardId: '@?',
        title: '<',
        headerClasses: '<?',
        bodyClasses: '<?',
    }
})