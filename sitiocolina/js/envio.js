$(document).ready(() => {

    $('#formulario').on('submit', (e) => {
        e.preventDefault()


        let dados = $('form').serialize()
        //console.log(dados)

        //ajax
        $.ajax({
            type: 'post',
            url: 'email.php',
            data: dados, //x-www-form-urlencoded
            dataType: 'json',
            success: dados => {
                debugger;
                let header = $('#modal-header');
                let tituloModal = $('#exampleModalLongTitle');
                let modalBody = $('#modalbody');
                let buttonModal = $('#buttonmodal');

                if(dados.codigo == 1){
                    header.addClass('text-success');
                    buttonModal.addClass('btn-success');
                    tituloModal.html('Sucesso')
                    modalBody.html('Sua mensagem foi enviada com sucesso!')
                    buttonModal.html('Fechar')
                    $('#nome').val('');
                    $('#email').val('');
                    $('#assunto').val('');
                    $('#mensagem').val('');
                }else{
                    header.addClass('text-danger');
                    buttonModal.addClass('btn-danger');
                    tituloModal.html('Erro')
                    modalBody.html('Sua mensagem não pode ser enviada, tente novamente.')
                    buttonModal.html('Fechar')
                }
                $('#modalInteiro').modal('show')
            },
            error: erro => {
                debugger;
                let header = $('#modal-header');
                let tituloModal = $('#exampleModalLongTitle');
                let modalBody = $('#modalbody');
                let buttonModal = $('#buttonmodal');
                header.addClass('modal-header');
                header.addClass('text-danger');
                buttonModal.addClass('btn');
                buttonModal.addClass('btn-danger');
                tituloModal.html('Erro')
                modalBody.html('Sua mensagem não pode ser enviada, tente novamente.')
                buttonModal.html('Fechar')
                $('#modalInteiro').modal('show')
            }
        })

    })






})//fim

