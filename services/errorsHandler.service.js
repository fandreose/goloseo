app.service('errorHandler', function ($toastr, store) {


    this.responseError = (response) => {
        const status = response.status;
        let message = null;
        switch (status) {
            case 400:
                message = response.data.message || response.data.output.RESMESSAGE
                $toastr.error(message)
                break
            case 401:
                message = response.data.message || response.data.output.RESMESSAGE
                break;
            case 500:
                if (response.data.error) {
                    if (response.data.error.originalError) {
                        message = response.data.error.originalError.info.message;
                        $toastr.error(message)
                    } else {
                        const message = 'Uh oh! Qualcosa è andato storto. Riprova più tardi'
                        $toastr.error(message)
                    }

                } else if (response.data.output){
                    message = response.data.output.RESMESSAGE
                    $toastr.error(message)
                } else {
                    message = response.data;
                    $toastr.error(message)
                }
                break;
            default:
                message = response.data || 'Stiamo aggiustando il flusso canalizzatore. Riprova più tardi';
                $toastr.error(message)
        }
        store.setError(message)
    }
})