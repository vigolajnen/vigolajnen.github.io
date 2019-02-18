
$(document).ready(function () {
    var $scope = $('#form'),
        $form = $scope.find('form'),
        $button = $form.find('[type="submit"]'),
        url = $form.attr('action'),
        files;
    var btnTitle = 'Отправить заявку',
        btnLoadingTitle = 'Отправка...';

    function uploadFiles(event)
    {
        event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        // START A LOADING SPINNER HERE
        // Create a formdata object and add the files
        var data = new FormData();

        $.each(files, function (key, value)
        {
            data.append(key, value);
        });

        $.ajax({
            url: '/konkurs/upload.php?files',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function (data, textStatus, jqXHR)
            {
                if (typeof data.error === 'undefined')
                {
                    // Success so call function to process the form
                    submitForm(event, data);
					// ing_events({category:'forms', action:'submit', label:'vacancies', ya_label:'vacancies'});
                } else
                {
                    // Handle errors here
                   console.log('ERRORS: ' + data.error);
                }
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                // Handle errors here
//                console.log('ERRORS: ' + textStatus);
                // STOP LOADING SPINNER
            }
        });
    }

    var success = function () {
        $scope.find('#form-body').attr('hidden', '');
        $scope.find('#form-success').removeAttr('hidden');
    };

    function submitForm(event, data)
    {
        // Create a jQuery object from the form
        // $form = $('[data-send="' + nameForm + '"]');

        // Serialize the form data
        var formData = $form.serialize(),
                url = $form.attr('action') + 'submit.php';

        // You should sterilise the file names
        $.each(data.files, function (key, value)
        {
            formData = formData + '&FILE[]=' + value;
        });
        console.log(formData);

        $.ajax({
            url: url,
            type: 'POST',
            data: formData,
            cache: false,
            dataType: 'json',
            // myName: nameForm,
            success: success,
            error: function (jqXHR, textStatus, errorThrown)
            {
                // Handle errors here
//                console.log('ERRORS: ' + textStatus);
            },
            complete: function ()
            {
                // STOP LOADING SPINNER
            }
        });
    }

    var $vacancyForm = $('#form').find('form');
    $vacancyForm.submit(function (e) {
        $button.text(btnLoadingTitle);
        $button.prop("disabled", true);

        e.preventDefault();
        var data = $(this).serialize(),
            error = false;

        // $(this).find('[data-required]').each(function () {
        //     if (!this.value.length) {
        //         $(this).addClass('has-error');
        //         error = true;
        //     } else {
        //         $(this).removeClass('has-error');
        //     }
        // });
        //
        // if (error === true) {
        //     return false;
        // }

        // $button.prop("disabled", true);

        uploadFiles(e);

        return false;
    });



    $('input[type=file]').on('change', function (e) {

        if(typeof e.target.files !== 'undefined') {
            files = e.target.files;
            var file = files[0];
            console.log(files);
            return;
            // if(file && file.name) {
            //     $('#vacancy_resume_title').text(file.name);
            //     return;
            // }
        }

        // $('#vacancy_resume_title').text('Прикрепить файл');
    });
});
