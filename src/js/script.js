$(document).ready(function () {

    //verifica se o botão de editar foi clicado e altera o estilo
    $('.edit-button').on('click', function () {
        var $task = $(this).closest('.task');
        $task.find('.progress').addClass('hidden');
        $task.find('.task-description').addClass('hidden');
        $task.find('.task-actions').addClass('hidden');
        $task.find('.edit-task').removeClass('hidden');
    })

    //verifica se o checkbox foi clicado e altera o estilo
    $('.progress').on('click', function () {
        if ($(this).is(':checked')) {
            $(this).addClass('done');
        } else {
            $(this).removeClass('done');
        }
    });

    $('.progress').on('change', function () {
        const id = $(this).data('task-id');
        const completed = $(this).is(':checked') ? 'true' : 'false';
        $.ajax({
            url: '../../actions/update-progress.php',
            method: 'POST',
            data: {id: id, completed: completed},
            dataType: 'json',
            success: function (response) {
                if (response.success) {

                } else {
                    alert('Erro ao editar a tarefa');
                }
            },
            error: function () {
                alert('Ocorreu um erro');
            }
        });
    })
});