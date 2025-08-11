$(document).ready(function () {
    // Função para carregar os componentes HTML
    function carregarComponentes() {
        // Carrega o formulário de fornecedor, produtos e anexos da div #fornecedor-container
        $('#fornecedor-container').load('components/fornecedor.html');
        $('#produtos-container').load('components/produtos.html');
        $('#anexos-container').load('components/anexos.html');
    }
    carregarComponentes();
});