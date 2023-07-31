var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");
var bookmarkNameAlert = document.querySelector("#bookmarkNameAlert");
var bookmarkURLAlert = document.querySelector("#bookmarkURLAlert");
var tbody = document.getElementById("tbody");
var alter = document.getElementById("alert");

productCounter = [];

if (localStorage.getItem("products") != null) {
    productCounter = JSON.parse(localStorage.getItem("products"))
    displayData();
}

function addProduct() {
    var product = {
        name: bookmarkName.value,
        url: bookmarkURL.value,
    }
    if (product.name == "" || product.name.length < 3 || validBookmarkName() == false || validBookmarkURL() == false || product.url == "") {
        alter.innerHTML = `<div class="alert alert-danger" role="alert">
        <span style="background-color: transparent;" class="d-block">Site name must contain at least 3 characters </span>
        <span style="background-color: transparent;" class="d-block">Site URL must be a valid one</span>
        </div>`;
        clearValidation()
        clearData();
    } else {
        productCounter.push(product);
        alert.innerHTML = "";
        localStorage.setItem("products", JSON.stringify(productCounter));
        displayData();
        clearValidation()
        clearData();
    }
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
    clearData();
}

function clearData() {
    bookmarkName.value = "";
    bookmarkURL.value = "";
}

function clearValidation() {
    bookmarkName.classList.remove("is-valid");
    bookmarkName.classList.remove("is-invalid");
    bookmarkURL.classList.remove("is-valid");
    bookmarkURL.classList.remove("is-invalid");
    bookmarkNameAlert.classList.add("d-none");
    bookmarkNameAlert.classList.remove("d-block");
    bookmarkURLAlert.classList.add("d-none");
    bookmarkURLAlert.classList.remove("d-block");
}

function deleteData(index) {
    productCounter.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(productCounter));
    displayData();
}

function validBookmarkName() {
    var validText = /^[A-Z][a-z]{2,5}\s?([A-Z][a-z]{2,5})?$/;
    var text = bookmarkName.value;
    if (validText.test(text) == true) {
        bookmarkName.classList.add("is-valid");
        bookmarkName.classList.remove("is-invalid");
        bookmarkNameAlert.classList.remove("d-block");
        bookmarkNameAlert.classList.add("d-none");
        alert.innerHTML = "";
        return true
    } else if (validText.test(text) == false) {
        bookmarkName.classList.remove("is-valid");
        bookmarkName.classList.add("is-invalid");
        bookmarkNameAlert.classList.add("d-block")
        bookmarkNameAlert.classList.remove("d-none");
        return false;
    }
}

function validBookmarkURL() {
    var validUrl = /\b(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*\b/g;

    var url = bookmarkURL.value;

    if (validUrl.test(url) == true) {
        bookmarkURL.classList.add("is-valid");
        bookmarkURL.classList.remove("is-invalid");
        bookmarkURLAlert.classList.remove("d-none");
        bookmarkURLAlert.classList.add("d-none");
        alert.innerHTML = "";
        return true
    } else if (validUrl.test(url) == false) {
        bookmarkURL.classList.remove("is-valid");
        bookmarkURL.classList.add("is-invalid");
        bookmarkURLAlert.classList.add("d-block")
        bookmarkURLAlert.classList.remove("d-none");
        return false;
    }
}