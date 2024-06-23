const HOST_SERVER = "http://127.0.0.1:3000/"
let url_server = HOST_SERVER
let list_products = []
fetch(url_server + "products")
    .then(response => response.json())
    .then(products => {
        list_products = products;
        listCard(list_products)
    });

function listCard(list_products) {
    let text_output_card = ""
    for (let index = 0; index < list_products.length; index++) {
        const product = list_products[index];
        text_output_card += `
            <div class="card">
                <button class="heart-button"><i class="fa-regular fa-heart heart-icon"></i></button>
                <img src="images/${product['url_image']}" alt="фото" class="product-image">
                <h2 class="description">${product['name_product']}</h2>
                <p class="description">${product['description']}</p>
                <div class="bottom-section">
                <p class="price">${product['price']} грн</p>
                <button class="cart-button">в кошик <i class="fa-solid fa-basket-shopping"></i></button>
                </div>
            </div>`;
    }
    console.dir(blok3);

    blok3.innerHTML = text_output_card;
}