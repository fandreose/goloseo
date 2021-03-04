app.component('baseButton', {
    templateUrl: 'components/baseButton/baseButton.component.html',
    bindings: {
        color: '@',  // Button type (e,g primary, danger etc.)
        type: '@', // Button native type (e.g submit,button etc)
        text: '@?', // Button text
        disabled: '<?', //Button disabled
        icon: '@?', // Button icon from Fontawesome. e.g  'fa-chevron-up'. Without text is only icon
        id: '@?', // Button id
        size: '@?', // Button size lg|sm
        customClasses: '@?', // Button custom classes
        isLoading: '<?', // Icon loader with spin
        outline: '<?', // Button with border and text color from type
        link: '<?', // Button with no borde and text color from type
        block: '<?', // Bottone con stile display block per riempire il 100% della larghezza del contenitore
    },
    controller: function($scope) {
        var self = this;

        self.$onChanges = function() {
            // Imposto i valori di default
            self.type = self.type || 'button';

            // Imposto colore a default se non specificato
            self.color = self.color || 'default';
            // Imposto la tipologia a cascata con priorità ai flag outline, link e di default bottone regolare
            self.btnColor = self.outline ? `btn-outline-${self.color}` : self.link ?  `btn-link text-${self.color}` : `btn-${self.color}`;

            // Imposto l'evetuale size
            self.size = self.size ? `btn-${self.size}` : null;

            // Se sono in caricamento automaticamente disabilito il bottone
            self.customDisabled = self.isLoading || self.disabled
        }

        $scope.click = () => {
            $scope.$emit('btnClick', $scope.$ctrl.id)
        }
    }
})