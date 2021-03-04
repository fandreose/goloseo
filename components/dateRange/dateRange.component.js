app.component('dateRange', {
    templateUrl: 'components/dateRange/dateRange.component.html',
    bindings: {
        disabled: '<?',
        required: '<?',
        startDate: '=',
        endDate: '=',
        wrapperClasses: '<?',
        daterangeId: "@?",
        label: '@?',
        options: '<?',  // oggetto di opzioni descritte al link https://www.daterangepicker.com/#options. Non aggiungere mai le proprietà startDate e endDate
        localeOptions: '<?',
        rangesOptions: '<?'
    },

    controller: function ($scope, $translate, uuid) {

        const localeOptions = $scope.$ctrl.localeOptions || {
            "direction": $translate.instant('vendors.daterange.direction'),
            "format": $translate.instant('vendors.daterange.format'),
            "separator": $translate.instant('vendors.daterange.separator'),
            "applyLabel": $translate.instant('vendors.daterange.applyLabel'),
            "cancelLabel": $translate.instant('vendors.daterange.cancelLabel'),
            "fromLabel": $translate.instant('vendors.daterange.fromLabel'),
            "toLabel": $translate.instant('vendors.daterange.toLabel'),
            "customRangeLabel": $translate.instant('vendors.daterange.customRangeLabel'),
            "daysOfWeek": [
                $translate.instant('vendors.daterange.daysOfWeek.dom'),
                $translate.instant('vendors.daterange.daysOfWeek.lun'),
                $translate.instant('vendors.daterange.daysOfWeek.mar'),
                $translate.instant('vendors.daterange.daysOfWeek.mer'),
                $translate.instant('vendors.daterange.daysOfWeek.gio'),
                $translate.instant('vendors.daterange.daysOfWeek.ven'),
                $translate.instant('vendors.daterange.daysOfWeek.sab'),
            ],
            "monthNames": [
                $translate.instant('vendors.daterange.monthNames.gen'),
                $translate.instant('vendors.daterange.monthNames.feb'),
                $translate.instant('vendors.daterange.monthNames.mar'),
                $translate.instant('vendors.daterange.monthNames.apr'),
                $translate.instant('vendors.daterange.monthNames.mag'),
                $translate.instant('vendors.daterange.monthNames.giu'),
                $translate.instant('vendors.daterange.monthNames.lug'),
                $translate.instant('vendors.daterange.monthNames.ago'),
                $translate.instant('vendors.daterange.monthNames.set'),
                $translate.instant('vendors.daterange.monthNames.ott'),
                $translate.instant('vendors.daterange.monthNames.nov'),
                $translate.instant('vendors.daterange.monthNames.dic'),
            ],
            "firstDay": $translate.instant('vendors.daterange.firstDay')
        };

        const rangesOptions = $scope.$ctrl.rangesOptions || {}
        rangesOptions[$translate.instant("vendors.daterange.today")] = [moment(), moment()];
        rangesOptions[$translate.instant("vendors.daterange.yesterday")] = [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        rangesOptions[$translate.instant("vendors.daterange.last7Day")] = [moment().subtract(6, 'days'), moment()],
        rangesOptions[$translate.instant("vendors.daterange.last30Day")] = [moment().subtract(29, 'days'), moment()],
        rangesOptions[$translate.instant("vendors.daterange.thisMonth")] = [moment().startOf('month'), moment().endOf('month')],
        rangesOptions[$translate.instant("vendors.daterange.lastMonth")] = [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]

        this.$onInit = () => {
            // imposto di default un id nel caso non ci fosse
            $scope.$ctrl.daterangeId = $scope.$ctrl.daterangeId || uuid.v4();
        }

        this.$doCheck = () => {
            let options = {
                ranges: rangesOptions,
                showCustomRangeLabel: false,
                alwaysShowCalendars: true,
                locale: localeOptions,
                buttonClasses: 'btn btn-sm',
                applyButtonClasses: 'btn-primary',
                cancelButtonClasses: 'btn-outline-primary'
            }

            // Se ho date in input le inserisco, altrimenti lascio l'input vuoto.
            // Questo mi permette di avere un valore data vuoto, altrimenti mi da errore
            options = ( $scope.$ctrl.startDate && $scope.$ctrl.endDate ) ? { ...options, startDate: $scope.$ctrl.startDate, endDate: $scope.$ctrl.endDate } : { ...options, autoUpdateInput: false}
            

            // se ho un oggetto di options che mi arriva da fuori faccio il merge con quello interno
            if ($scope.$ctrl.options) {
                options = {...options, ...$scope.$ctrl.options}
            }

            
            $(`#${$scope.$ctrl.daterangeId}`).daterangepicker(
                options, 
                (start, end) => {
                    $scope.$ctrl.startDate = start;
                    $scope.$ctrl.endDate = end;
                    $scope.$apply();
                }
            )
        }


    }


});


