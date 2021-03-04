app.component('baseTable', {
    templateUrl: 'components/baseTable/baseTable.component.html',
    bindings: {
        columnDefs: '<',    // oggetto con definizione header, valori da prendere, formattazioni ed eventuali template
        data: '=',          // array di dati
        id: '@?',           // da valorizzare nel caso di più tabelle nella stessa pagina per distinguerne la paginazione
        selectable: '@?',   // valori di input 'checkbox' o 'radio'
        isLoading: '<'      // se true mostra lo skeleton altrimenti la lista dei record contenuti in data
    },
    controller: function ($scope, $filter) {
        this.$onInit = () => {
            $scope.state.pagination.itemsPerPage = $scope.state.pagination.selection[0].label
            $scope.state.id = $scope.$ctrl.id || 'base-table';
            $scope.state.skeletons = new Array($scope.state.pagination.itemsPerPage);
        }
        
        this.$onChanges = () => {
            $scope.state.radio = $scope.$ctrl.selectable == 'radio';
            $scope.state.checkbox = $scope.$ctrl.selectable == 'checkbox';
        }

        $scope.state = {
            id: 'base-table',
            sorting: {
                key: '',
                reverse: true,
            },
            pagination: {
                selection: [
                    { id: 10, label: 10 },
                    { id: 25, label: 25 },
                    { id: 50, label: 50 },
                    { id: 100, label: 100 }
                ],
                itemsPerPage: null
            },
            skeletons: [],
            allSelected: false,
            radio: null,
            checkbox: null,
            selectedCount: 0
        }

        // Ordinamento dall'header della tabella
        $scope.sortBy = (key) => {
            // se sto ordinando la stella colonna cambil il valore di reverse, altrimenti lo fisso ascendente
            $scope.state.sorting.reverse = $scope.state.sorting.key != key ?  false : !$scope.state.sorting.reverse;
            $scope.state.sorting.key = key
        }

        // pilota la classe dell'header di una colonna non ordinata
        $scope.sorted = (property) => {
            return property == $scope.state.sorting.key
        }

        // pilota la classe dell'header di una colonna ordinata dal più piccolo al più grande
        $scope.sortedAsc = (property) => {
            return $scope.sorted(property) && !$scope.state.sorting.reverse
        }

        // pilota la classe dell'header di una colonna ordinata dal più grande al più piccolo
        $scope.sortedDesc = (property) => {
            return $scope.sorted(property) && $scope.state.sorting.reverse
        }

        // pesca l'elemento corrispondente esattamente come arriva dal columnDefs, con eventualmente un tipo e un formato
        $scope.getCell = (row, columnDef) => {
            let cell = row[columnDef.name]
            if (columnDef.type) {
                cell = $filter(columnDef.type)(cell, columnDef.format)
            }
            return cell
        }

        // conta il numero di righe selezionate
        const countSelected = () => {
            $scope.state.selectedCount = $scope.$ctrl.data.filter(row => {return row.selected == 1}).length
        }

        // Se il singolo elemento è stato selezionato fa un emit della intera riga
        $scope.selectRow = (row) => {
            row.selected && $scope.$emit('baseTableSelectedRow', row);
            countSelected();
        }

        // seleziona/deseleziona tutti gli items in input
        $scope.selectAllRows = () => {

            $scope.$ctrl.data.forEach(row => {
                row['selected'] = $scope.state.allSelected;
            })

            $scope.$emit('baseTableAllRowsSelected', $scope.$ctrl.data);
            countSelected();
        }

        
    }
});