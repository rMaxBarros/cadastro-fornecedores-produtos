$(document).ready(function () {
    let productIndex = 1;

    // Função para adicionar um novo card de produto na tela
    function adicionarProduto() {
        productIndex++;

        const templateHtml = $('#lista-produtos .product-row').first().html();

        let novoProdutoHtml = templateHtml.replace(/___ID__/g, '_' + productIndex);
        novoProdutoHtml = novoProdutoHtml.replace(/Produto - 1/g, 'Produto - ' + productIndex);

        // Adiciona o botão de deletar apenas se houver mais de um produto
        const deleteButton = `
        <button type="button" class="btn btn-danger btn-delete-product">
            <span class="glyphicon glyphicon-trash"></span>
        </button>`;

        let novoProduto = $('<div class="row product-row"></div>').html(novoProdutoHtml);

        novoProduto.find('.col-md-1').html(deleteButton);

        $('#lista-produtos').append(novoProduto);
    }

    // Evento de clique para ADICIONAR novo card de produto
    $('#produtos-container').on('click', '#btnAdicionarProduto', function () {
        adicionarProduto();
    });

    // Evento de clique para EXCLUIR um card de produto
    $('#produtos-container').on('click', '.btn-delete-product', function () {
        $(this).closest('.product-row').remove();
        productIndex--;
    });

});