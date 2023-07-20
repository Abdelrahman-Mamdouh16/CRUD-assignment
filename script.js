var ProductNameData = document.getElementById("ProductName");
var ProductPriceData = document.getElementById("ProductPrice");
var ProductCategoryData = document.getElementById("ProductCategory");
var ProductDescriptionData = document.getElementById("ProductDescription");

var tBodyData = document.getElementById("tbody");

var container = [];

function display() {

    var product = {
        name: ProductNameData.value,
        price: ProductPriceData.value,
        Category: ProductCategoryData.value,
        Description: ProductDescriptionData.value,
    }
    container.push(product)
    tBodyData.innerHTML = '';

    for (var i = 0; i < container.length; i++) {
        var productData = container[i];
        var row = `<tr>
                                <td> ${i} </td>
                                <td> ${productData.name} </td>
                                <td> ${productData.price} </td>
                                <td> ${productData.Category} </td>
                                <td> ${productData.Description} </td>
                                <td class="text-center">
                                    <button class="btn btn-outline-warning">Update</button>
                                    <button class="btn btn-outline-danger">Delete</button>
                                </td>
                            </tr>`
        tBodyData.innerHTML += row;
    }

}

































// let products = [];

// function addProduct() {
//     const productName = document.getElementById('ProductName').value;
//     const productPrice = document.getElementById('ProductPrice').value;
//     const productCategory = document.getElementById('ProductCategory').value;
//     const productDescription = document.getElementById('ProductDescription').value;

//     const product = {
//         name: productName,
//         price: productPrice,
//         category: productCategory,
//         description: productDescription,
//     };

//     products.push(product);
//     displayProducts();
//     clearInputs();
// }

// function displayProducts() {
//     const tbody = document.getElementById('tbody');
//     tbody.innerHTML = '';

//     for (let i = 0; i < products.length; i++) {
//         const product = products[i];
//         const row = `<tr>
//                         <td>${i + 1}</td>
//                         <td>${product.name}</td>
//                         <td>${product.price}</td>
//                         <td>${product.category}</td>
//                         <td>${product.description}</td>
//                         <td class="text-center">
//                             <button class="btn btn-outline-warning" onclick="editProduct(${i})">Update</button>
//                             <button class="btn btn-outline-danger" onclick="deleteProduct(${i})">Delete</button>
//                         </td>
//                     </tr>`;
//         tbody.innerHTML += row;
//     }
// }

// function clearInputs() {
//     document.getElementById('ProductName').value = '';
//     document.getElementById('ProductPrice').value = '';
//     document.getElementById('ProductCategory').value = '';
//     document.getElementById('ProductDescription').value = '';
// }

// function editProduct(index) {
//     const product = products[index];
//     document.getElementById('ProductName').value = product.name;
//     document.getElementById('ProductPrice').value = product.price;
//     document.getElementById('ProductCategory').value = product.category;
//     document.getElementById('ProductDescription').value = product.description;
// }

// function deleteProduct(index) {
//     products.splice(index, 1);
//     displayProducts();
// }

// // Initially display products
// displayProducts();
