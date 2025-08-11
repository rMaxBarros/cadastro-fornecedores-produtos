$(document).ready(function() {
    
    // Molde HTML para uma linha de anexo
    const anexoTemplateHtml = `
    <div class="row attachment-row" data-file-key="__KEY__">
        <div class="col-md-2">
            <button type="button" class="btn btn-danger btn-delete-anexo" title="Excluir">
                <span class="glyphicon glyphicon-trash"></span>
            </button>
            <button type="button" class="btn btn-info btn-view-anexo" title="Visualizar">
                <span class="glyphicon glyphicon-eye-open"></span>
            </button>
        </div>
        <div class="col-md-10">
            <span class="doc-name">__FILENAME__</span>
        </div>
    </div>`;

    function adicionarAnexoNaTela(fileName, fileKey) {
        $('#nenhum-anexo-mensagem').remove();
        const novoAnexoHtml = anexoTemplateHtml
            .replace('__FILENAME__', fileName)
            .replace('__KEY__', fileKey);
        $('#lista-anexos').append(novoAnexoHtml);
    }

    

    // Evento para o botão "Incluir Anexo"
    $('#anexos-container').on('click', '#btnIncluirAnexo', function() {
        $('#inputAnexo').click();
    });

    // Evento para quando o usuário seleciona um arquivo
    $(document).on('change', '#inputAnexo', function(event) {
        const files = event.target.files;

        for (const file of files) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const fileContent = e.target.result;
                const fileKey = 'anexo_' + Date.now() + '_' + file.name;

                sessionStorage.setItem(fileKey, JSON.stringify({
                    name: file.name,
                    type: file.type,
                    content: fileContent
                }));
                adicionarAnexoNaTela(file.name, fileKey);
            };
            reader.readAsDataURL(file);
        }
        $(this).val('');
    });

    // NOVO: Evento para EXCLUIR um anexo
    $('#anexos-container').on('click', '.btn-delete-anexo', function() {
        // Encontra a linha do anexo que foi clicado
        const anexoRow = $(this).closest('.attachment-row');
        
        const fileKey = anexoRow.data('file-key');
        
        sessionStorage.removeItem(fileKey);
        
        anexoRow.remove();

        // Se a lista de anexos ficar vazia, exibe a mensagem inicial novamente
        if ($('#lista-anexos .attachment-row').length === 0) {
            $('#lista-anexos').html('<p class="text-muted" id="nenhum-anexo-mensagem">Você deve inserir pelo menos um anexo.</p>');
        }
    });

    // Evento para VISUALIZAR (fazer download) do anexo
    $('#anexos-container').on('click', '.btn-view-anexo', function() {
        const anexoRow = $(this).closest('.attachment-row');
        const fileKey = anexoRow.data('file-key');

        // Pega os dados do arquivo que estão salvos na memória
        const fileDataString = sessionStorage.getItem(fileKey);
        const fileData = JSON.parse(fileDataString);

        if (fileData) {
            // Cria um link temporário na memória
            const link = document.createElement('a');
            
            // Define o conteúdo do arquivo (base64) como o destino do link
            link.href = fileData.content;
            
            // Define o nome original do arquivo para o download
            link.download = fileData.name;
            
            // Simula um clique no link para iniciar o download
            link.click();
        }
    });
});