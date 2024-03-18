$(document).ready(function () {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function addProductFromUrl() {
        var name = getUrlParameter('name');
        var image = getUrlParameter('image');
        var price = getUrlParameter('price');

        var productRow = `
        <div class="row mt-3 product-row">
            <div class="col-4 -md-4">
                <div class="row"> 
                    <img src="${image}" alt="Product Image" class="product-image">
                    <div class="row">
                    <div class="col">
                    <h5 class="product-name">${name}</h5>
                    <h5 class="price"> ${price} EGP</h5>
                    </div>
                    </div>
                    </div>
                 
            </div>
            <div class="col-md-2">
            <div class="amount">
            <button class="btn btn-sm btn-success decrease-quantity">-</button>
            <span class="mx-2 quantity">1</span>
            <button class="btn btn-sm btn-success increase-quantity">+</button>
            </div>
               
            </div>
            <div class="col-md-2 text-md-right">
                <button class="btn btn-success book">Book</button>
            </div>
            <div class="col-md-2 text-md-right">
                <button class="btn btn-sm btn-danger remove-product">Remove</button>
            </div>
        </div>
    `;

        $('.cart .container').append(productRow);

        updateTotal();
    }
    

    addProductFromUrl();

});

$(document).ready(function () {
    $('.increase-quantity').on('click', function () {
        var quantityElement = $(this).siblings('.quantity');
        var currentQuantity = parseInt(quantityElement.text());
        quantityElement.text(currentQuantity + 1);
        updateTotal();
    });

    $('.decrease-quantity').on('click', function () {
        var quantityElement = $(this).siblings('.quantity');
        var currentQuantity = parseInt(quantityElement.text());
        if (currentQuantity > 1) {
            quantityElement.text(currentQuantity - 1);
            updateTotal();
        }
    });

    $('.remove-product').on('click', function () {
        $(this).closest('.product-row').remove();
        updateTotal();
    });

  

    function updateTotal() {
        var total = 0;
        $('.product-row').each(function () {
            var price = parseInt($(this).find('.price').text().replace('EGP', ''));
            var quantity = parseInt($(this).find('.quantity').text());
            total += price * quantity;
        });
        $('#total').text('Total: ' + total.toFixed() + ' EGP');
    }
});