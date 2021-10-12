// productName

var nameInput = document.getElementById("name");
var phoneNumberInput = document.getElementById("phoneNumber");
var questionOneInput = document.getElementById("questionOne");
var questionTwoInput = document.getElementById("questionTwo");

var productsContainer;
if (localStorage.getItem("productsList") == null)//zbon gdid
{
    productsContainer = [];
}
else {
    productsContainer = JSON.parse(localStorage.getItem('productsList'));
    displayProducts();
}
function addProduct() {


    var product = {

        name: nameInput.value,
        price: phoneNumberInput.value,
        category: questionTwoInput.value,
        desc: questionOneInput.value
    }
    productsContainer.push(product);
    localStorage.setItem("productsList", JSON.stringify(productsContainer));
    // clearForm();
    displayProducts();

}

function clearForm() {
    nameInput.value = "";
    phoneNumberInput.value = "";
    questionTwoInput.value = "";
    questionOneInput.value = "";

}



function displayProducts() {

    var cartoona = ``;
    for (var i = 0; i < productsContainer.length; i++) {//3
        cartoona += `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td> <button onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}





function searchProducts(term) {
    var cartoona = ``;
    for (var i = 0; i < productsContainer.length; i++) {

        if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            cartoona += `<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td> <button  onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}


function deleteProducts(index) {
    productsContainer.splice(index , 1);
    displayProducts();
    localStorage.setItem("productsList", JSON.stringify(productsContainer));
  }

