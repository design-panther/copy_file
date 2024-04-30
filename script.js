
        $(document).ready(function() {
            $('#fileForm').on('submit', function(e) {
                e.preventDefault();
                var fileInput = document.getElementById('fileInput');
                console.log(fileInput.files);
                if (fileInput.files.length > 0) {
                    var file = fileInput.files[0];
                    var formData = new FormData();
                    formData.append("file", file);

                    $.ajax({
                        url: 'http://localhost:3000/copyFile',
                        type: 'POST',
                        processData: false, // Prevents jQuery from automatically transforming the data into a query string
                        contentType: false,
                        data: formData,
                        success: function(response) {
                            $('#response').html('<p>' + response + '</p>');
                        },
                        error: function(xhr, status, error) {
                            $('#response').html('<p style="color: red;">Error: ' + xhr.responseText + '</p>');
                        }
                    });
                } else {
                    $('#response').html('<p style="color: red;">Please select a file to copy.</p>');
                }
            });
        });
    