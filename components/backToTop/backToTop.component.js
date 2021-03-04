app.component('backToTop', {
    templateUrl: 'components/backToTop/backToTop.component.html',
    controller: function ($scope, $window, $element) {
        $window.addEventListener("scroll", (event) => {
            // ogni 300 ms verifico lo stato dello scroll.
            // In questo modo evito che il javascript debba usare 
            // troppe risorse per questo listener
            setTimeout(function () {
                if (angular.element($window).scrollTop() > 100) {
                    $($element).fadeIn();
                } else {
                    $($element).fadeOut();
                }
            }, 300);
        });

        $scope.scrollTop = () => {
            $window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
})