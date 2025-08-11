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

    // Cálculo do valor total do produto
    function calcularValorTotal(productRow) {
        const $row = $(productRow);
        const quantidade = parseFloat($row.find('.product-quantity').val()) || 0;

        const valorUnitarioStr = $row.find('.product-unit-price').val().replace('R$', '').trim().replace(',', '.');
        const valorUnitario = parseFloat(valorUnitarioStr) || 0;

        const total = quantidade * valorUnitario;
        const totalFormatado = 'R$ ' + total.toFixed(2).replace('.', ',');

        $row.find('.product-total-price').val(totalFormatado);
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

    // Evento para CALCULAR o total digitado no valor unitário e quantidade
    $('#produtos-container').on('keyup input', '.product-quantity, .product-unit-price', function() {
        const productRow = $(this).closest('.product-row');
        calcularValorTotal(productRow);
    });

});