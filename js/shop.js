function addToCart() {
    try {
      var name = document.getElementById('productName').innerText;
      var image = document.getElementById('productImage').src;
      var price = parseInt(document.getElementById('productPrice').innerText.replace('Price: ', ' '));

      var encodedName = encodeURIComponent(name);
      var encodedImage = encodeURIComponent(image);
      var encodedPrice = encodeURIComponent(price.toFixed());


      window.location.href = `cart.html?name=${encodedName}&image=${encodedImage}&price=${encodedPrice}`;
    } catch (error) {
      console.error('Error in addToCart:', error);
    }
  }



  function showProductDetail(name, image, quantity, price) {

    document.getElementById('productName').innerText = name;
    document.getElementById('productImage').src = image;
    document.getElementById('productQuantity').innerText = 'Quantity:  ' + quantity;
    document.getElementById('productPrice').innerText = 'Price: ' + price.toFixed() + ' EGP ';


    document.getElementById('productDetail').style.display = 'flex';
  }

