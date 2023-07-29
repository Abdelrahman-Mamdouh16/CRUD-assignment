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
    // validText.test(text) == false||
    if (product.name == "" || product.name.length < 3 || validBookmarkName()== false  || validBookmarkURL()== false ||product.url == "") {
        document.getElementById("alert").innerHTML = `<div class="alert alert-danger" role="alert">
        <span style="background-color: transparent;" class="d-block">Site name must contain at least 3 characters </span>
        <span style="background-color: transparent;" class="d-block">Site URL must be a valid one</span>
        </div>`;
        document.getElementById("bookmarkName").classList.remove("is-valid");
        document.getElementById("bookmarkName").classList.remove("is-invalid");
        document.getElementById("bookmarkURL").classList.remove("is-valid");
        document.getElementById("bookmarkURL").classList.remove("is-invalid");
        document.querySelector("#bookmarkNameAlert").classList.add("d-none");
        document.querySelector("#bookmarkNameAlert").classList.remove("d-block");
        document.querySelector("#bookmarkURLAlert").classList.add("d-none");
        document.querySelector("#bookmarkURLAlert").classList.remove("d-block");
        clearData();
    } else {
        productCounter.push(product);
        document.getElementById("alert").innerHTML = "";
        localStorage.setItem("products", JSON.stringify(productCounter));
        displayData();
        document.getElementById("bookmarkName").classList.remove("is-valid");
        document.getElementById("bookmarkName").classList.remove("is-invalid");
        document.getElementById("bookmarkURL").classList.remove("is-valid");
        document.getElementById("bookmarkURL").classList.remove("is-invalid");
        document.querySelector("#bookmarkNameAlert").classList.add("d-none");
        document.querySelector("#bookmarkNameAlert").classList.remove("d-block");
        document.querySelector("#bookmarkURLAlert").classList.add("d-none");
        document.querySelector("#bookmarkURLAlert").classList.remove("d-block");
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

function deleteData(index) {
    productCounter.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(productCounter));
    displayData();
}

function validBookmarkName() {
    var validText = /^[A-Z][a-z]{2,5}\s?([A-Z][a-z]{2,5})?$/;

    var text = bookmarkName.value;




    if (validText.test(text) == true) {
        document.getElementById("bookmarkName").classList.add("is-valid");
        document.getElementById("bookmarkName").classList.remove("is-invalid");
        document.querySelector("#bookmarkNameAlert").classList.remove("d-none");
        document.querySelector("#bookmarkNameAlert").classList.add("d-none");
        document.getElementById("alert").innerHTML = "";
        return true
    } else if (validText.test(text) == false) {
        document.getElementById("bookmarkName").classList.remove("is-valid");
        document.getElementById("bookmarkName").classList.add("is-invalid");
        document.querySelector("#bookmarkNameAlert").classList.add("d-block")
        document.querySelector("#bookmarkNameAlert").classList.remove("d-none");
        return false;
    }
}

function validBookmarkURL(){
    var validUrl = /\b(?:https?|ftp):\/\/[^\s/$.?#].[^\s]*\b/g;

    var url =bookmarkURL.value;

    if (validUrl.test(url) == true) {
        document.getElementById("bookmarkURL").classList.add("is-valid");
        document.getElementById("bookmarkURL").classList.remove("is-invalid");
        document.querySelector("#bookmarkURLAlert").classList.remove("d-none");
        document.querySelector("#bookmarkURLAlert").classList.add("d-none");
        document.getElementById("alert").innerHTML = "";
        return true
    } else if (validUrl.test(url) == false) {
        document.getElementById("bookmarkURL").classList.remove("is-valid");
        document.getElementById("bookmarkURL").classList.add("is-invalid");
        document.querySelector("#bookmarkURLAlert").classList.add("d-block")
        document.querySelector("#bookmarkURLAlert").classList.remove("d-none");
        return false;
    }
}