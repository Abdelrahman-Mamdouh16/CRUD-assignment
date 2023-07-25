var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");
var tbody = document.getElementById("tbody")

productCounter = [];

if (localStorage.getItem("products") != null) {
    productCounter = JSON.parse(localStorage.getItem("products"))
    displayData();
}

function addProduct() {
    var product = {
        name: bookmarkName.value.trim(),
        url: bookmarkURL.value,
    }
    if (product.name == "" || product.name.length < 3 || product.url == "") {
        document.getElementById("alert").innerHTML = `<div class="alert alert-danger" role="alert">
        <span style="background-color: transparent;" class="d-block">Site name must contain at least 3 characters </span>
        <span style="background-color: transparent;" class="d-block">Site URL must be a valid one</span>
        </div>`;
        // alert("");
    } else {
        productCounter.push(product);
        document.getElementById("alert").innerHTML ="";
    }
    localStorage.setItem("products", JSON.stringify(productCounter));
    displayData();
    clearData();
}

function displayData() {
    var cartona = "";
    for (var i = 0; i < productCounter.length; i++) {
        cartona += `
            <tr>
                <td> ${i + 1} </td>
                <td> ${productCounter[i].name} </td>
                <td>
                    <a href="${productCounter[i].url}" target="_blank">
                        <button class="btn btn-success text-light px-4 py-2 btn-f myButton">
                            <i class="fa-solid fa-eye bg-transparent pe-1"></i>
                            Visit
                    </button>
                    </a>
                </td>
                <td>
                    <button class="btn btn-danger text-light  px-4 py-2 myButton" onclick="deleteData(${i})">
                        <i class="fa-solid fa-trash-can bg-transparent pe-1"></i>
                        Delete
                    </button>
                </td>
            </tr>
            
        `
    }
    tbody.innerHTML = cartona;
}

function clearData() {
    bookmarkName.value = "";
    bookmarkURL.value = "";
}

function deleteData(index) {
    productCounter.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(productCounter));
    displayData();
}