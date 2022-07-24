function getCurrentDate() {
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    time = new Date();
    var ampm = time.getHours() >= 12 ? ' PM' : ' AM';
    hours = time.getHours() % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().length == 1 ? 0 + hours.toString() : hours;

    var minutes = time.getMinutes().toString()
    minutes = minutes.length == 1 ? 0 + minutes : minutes;

    var seconds = time.getSeconds().toString()
    seconds = seconds.length == 1 ? 0 + seconds : seconds;
    let x1 = hours + ':' + minutes + ':' + seconds + ampm + '<br>' + weekday[time.getDay()] + ', ' + month[time.getMonth()] + ' ' + time.getDate() + ', ' + time.getFullYear();
    document.getElementById('current-time').innerHTML = x1;
}
setInterval(function () {
    getCurrentDate();
}, 1000)

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    let x1 = document.forms["myForm"]["lname"].value;
    if (x1 == "") {
        alert("Last Name must be filled out");
        return false;
    }
    let getSelectedValue = document.querySelector('input[name="Hgender"]:checked');
    if (getSelectedValue == null) {
        alert("Human Gender must be filled out");
        return false;
    }
    let x3 = document.forms["myForm"]["Email"].value;
    if (x3 == "") {
        alert("Email must be filled out");
        return false;
    }
    if(!ValidateEmail(x3)){
        alert("Invalid email address!");
    }
    let getSelectedValue1 = document.querySelector('input[name="Animal"]:checked');
    if (getSelectedValue1 == null) {
        alert("Preferred animal must be filled out");
        return false;
    }
    let getSelectedValue2 = document.querySelector('input[name="AGender"]:checked');
    if (getSelectedValue2 == null) {
        alert("Animal Gender must be filled out");
        return false;
    }
    let getSelectedValue3 = document.querySelector('input[name="extrovert?"]:checked');
    if (getSelectedValue3 == null) {
        alert("Extrovert must be filled out");
        return false;
    }
    let checkboxes = document.querySelectorAll('input[name="breeds"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    if (values.length == 0) {
        alert("Breed checkbox must be filled out");
        return false;
    }
    let x4 = document.forms["myForm"]["breed1"].value;
    if (x4 == "") {
        alert("Favorite breed text 1 must be filled out");
        return false;
    }
    let x5 = document.forms["myForm"]["breed2"].value;
    if (x5 == "") {
        alert("Favorite breed text 2 must be filled out");
        return false;
    }
    let x6 = document.forms["myForm"]["breed3"].value;
    if (x6 == "") {
        alert("Favorite breed text 3 must be filled out");
        return false;
    }
    let getSelectedValue4 = document.querySelector('input[name="CatBreed"]:checked');
    if (getSelectedValue4 == null) {
        alert("Cat Breed must be filled out");
        return false;
    }
}
function validateForm2() {
    let x = document.forms["myForm2"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    let x1 = document.forms["myForm"]["lname"].value;
    if (x1 == "") {
        alert("Last Name must be filled out");
        return false;
    }
    let getSelectedValue = document.querySelector('input[name="Hgender"]:checked');
    if (getSelectedValue == null) {
        alert("Human Gender must be filled out");
        return false;
    }
    let x3 = document.forms["myForm"]["Email"].value;
    if (x3 == "") {
        alert("Email must be filled out");
        return false;
    }
    if(!ValidateEmail(x3)){
        alert("Invalid email address!");
    }
    let getSelectedValue1 = document.querySelector('input[name="Animal"]:checked');
    if (getSelectedValue1 == null) {
        alert("Preferred animal must be filled out");
        return false;
    }
    let x4 = document.forms["myForm"]["age"].value;
    if (x4 == "") {
        alert("Animal age must be filled out");
        return false;
    }
    let getSelectedValue2 = document.querySelector('input[name="AGender"]:checked');
    if (getSelectedValue2 == null) {
        alert("Animal Gender must be filled out");
        return false;
    }
    let getSelectedValue3 = document.querySelector('input[name="Dextrovert?"]:checked');
    if (getSelectedValue3 == null) {
        alert("Dog Extrovert must be filled out");
        return false;
    }
    let getSelectedValue4 = document.querySelector('input[name="Cextrovert?"]:checked');
    if (getSelectedValue4 == null) {
        alert("Cat Extrovert must be filled out");
        return false;
    }
    let getSelectedValue5 = document.querySelector('input[name="Hextrovert?"]:checked');
    if (getSelectedValue5 == null) {
        alert("Children Extrovert must be filled out");
        return false;
    }
    let x5 = document.forms["myForm"]["about-pet"].value;
    if (x5 == "") {
        alert("About pet must be filled out");
        return false;
    }
    let x6 = document.forms["myForm"]["breed"].value;
    if (x6 == "") {
        alert("breed must be filled out");
        return false;
    }
}
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]*$/;
  
    if (input.value.match(validRegex)) {
  
      return true;
  
    } else {
  
      return false;
  
    }
  
  }
