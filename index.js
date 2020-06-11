//Send form data as JSON
var formData = JSON.stringify($("#myForm").serializeArray());

function saveData(){
    var name =  document.getElementById("name").value;
    var last =  document.getElementById("last").value;
    var phone =  document.getElementById("phone").value;
    var address =  document.getElementById("address").value;
    var addingContact = [name,last ,phone, address];// using
    console.log(addingContact)
    var itemsTorender = document.getElementById("people");// select where in the html

    itemsTorender.innerHTML = addingContact
    return false; // this will stop default submit of form (because by default form submit on "action" url if no action is define than on same page )
}
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
  	return saveData();
  }
} 
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}

function myFunction() {
  var txt = "";
  if (document.getElementById("id1").validity.rangeUnderflow) {
    txt = "Value too small";
  }
  document.getElementById("demo").innerHTML = txt;
}
/*<input id="id1" type="number" min="100">
<button onclick="myFunction()">OK</button>

<p id="demo"></p>*/

function upperCaseName() {
  var x = document.getElementById("last");
  x.value = x.value.toUpperCase();
}