app.config(function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: '/lang/',
            suffix: '.json'
        })
        .preferredLanguage('it')
        .useSanitizeValueStrategy('escape'); // uso escape al posto di 'sanitize' per le lettere accentate
});