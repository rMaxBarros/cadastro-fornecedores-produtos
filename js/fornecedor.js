$(document).ready(function() {

    // Função para limpar os campos de endereço
    function limparCamposEndereco() {
        $('#endereco').val('');
        $('#bairro').val('');
        $('#municipio').val('');
        $('#estado').val('');
    }

    // Evento de buscar os dados do CEP pela APÍ ao clicar fora do campo
    $('#fornecedor-container').on('blur', '#cep', function() {
        const cep = $(this).val().replace(/\D/g, '');

        // Verifica se o CEP tem 8 dígitos
        if (cep.length === 8) {
            $('#endereco').val('...');
            $('#bairro').val('...');
            $('#municipio').val('...');
            $('#estado').val('...');

            // Requisição para a API ViaCEP
            $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data) {
                if (!("erro" in data)) {
                    // Preenchimento dos campos com os dados retornados
                    $('#endereco').val(data.logradouro);
                    $('#bairro').val(data.bairro);
                    $('#municipio').val(data.localidade);
                    $('#estado').val(data.uf);
                    
                    // Move o foco do usuário para o campo 'Número'
                    $('#numero').focus();
                } else {
                    limparCamposEndereco();
                    alert('CEP não encontrado.');
                }
            }).fail(function() {
                limparCamposEndereco();
                alert('Não foi possível consultar o CEP.');
            });
        } else {
            limparCamposEndereco();
        }
    });
});