$(document).ready(function () {
    // Função para carregar os componentes HTML
    function carregarComponentes() {
        // Carrega o formulário de fornecedor, produtos e anexos da div #fornecedor-container
        $('#fornecedor-container').load('components/fornecedor.html');
        $('#produtos-container').load('components/produtos.html');
        $('#anexos-container').load('components/anexos.html');
    }

    // Função principal que coleta todos os dados e gera o JSON
    function gerarJSON() {
        const formData = {
            razaoSocial: $('#razaoSocial').val(),
            nomeFantasia: $('#nomeFantasia').val(),
            cnpj: $('#cnpj').val(),
            inscricaoEstadual: $('#inscricaoEstadual').val(),
            inscricaoMunicipal: $('#inscricaoMunicipal').val(),
            nomeContato: $('#nomeContato').val(),
            telefoneContato: $('#telefone').val(),
            emailContato: $('#email').val(),

            produtos: [],

            anexos: []
        };

        // Coleta os dados de cada card de produto
        $('#lista-produtos .product-row').each(function (index, element) {
            const $row = $(element);
            const produto = {
                indice: index + 1,
                descricaoProduto: $row.find('input[id^="produto_"]').val(),
                unidadeMedida: $row.find('select[id^="unidade_"]').val(),
                qtdeEstoque: $row.find('input[id^="quantidade_"]').val(),
                valorUnitario: $row.find('input[id^="valorUnitario_"]').val(),
                valorTotal: $row.find('input[id^="valorTotal_"]').val()
            };
            formData.produtos.push(produto);
        });

        // Coleta os dados de cada anexo a partir do sessionStorage
        $('#lista-anexos .attachment-row').each(function (index, element) {
            const fileKey = $(element).data('file-key');
            const fileDataString = sessionStorage.getItem(fileKey);

            if (fileDataString) {
                const fileData = JSON.parse(fileDataString);
                const anexo = {
                    indice: index + 1,
                    nomeArquivo: fileData.name,
                    blobArquivo: fileData.content
                };
                formData.anexos.push(anexo);
            }
        });

        return JSON.stringify(formData, null, 2);
    }

    // EVENTO DE SUBMISSÃO DO FORMULÁRIO
    $('form').on('submit', function (event) {
        event.preventDefault();

        if ($('#lista-produtos .product-row').length === 0) {
            alert('É obrigatório adicionar pelo menos um produto.');
            return;
        }
        if ($('#lista-anexos .attachment-row').length === 0) {
            alert('É obrigatório incluir pelo menos um anexo.');
            return;
        }

        // Exibe o modal de feedback
        $('#loadingState').show();
        $('#successState').hide();
        $('#feedbackModalTitle').text('Aguarde');
        $('#feedbackModal').modal('show');

        setTimeout(function () {
            const resultadoJson = gerarJSON();

            console.log('DADOS DO FORNECEDOR (JSON): ');
            console.log(resultadoJson);

            $('#loadingState').hide();
            $('#successState').show();
            $('#feedbackModalTitle').text('Sucesso!');
        }, 2000);
    });

    carregarComponentes();
});