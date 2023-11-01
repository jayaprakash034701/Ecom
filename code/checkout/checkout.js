var fcount = 0,
    scount = 0;
var firstsubBtn = document.getElementById("first_minus_counter");
var firstaddBtn = document.getElementById("first_additional_counter");
var firstCounter = document.getElementById("first__counter");
var secondCounter = document.getElementById("second__counter");

var secondsubBtn = document.getElementById("second_minus_counter");
var secondaddBtn = document.getElementById("second_additional_counter");

firstsubBtn.addEventListener("click", function(e) {
    fcount--;
    firstCounter.textContent = fcount;
}, false);


firstaddBtn.addEventListener("click", function(e) {
    fcount++;
    firstCounter.innerText = fcount;
}, false);

secondsubBtn.addEventListener("click", function(e) {
    scount--;
    secondCounter.textContent = scount;
}, false);


secondaddBtn.addEventListener("click", function(e) {
    scount++;
    secondCounter.innerText = scount;
}, false);

var name = document.forms["checkForm"]["fname"].value;
var email = document.forms["checkForm"]["email"].value;

function checkform() {
    if (name == "" || email == "") {
        document.checkForm.email.focus();
        return false;
    } else
        document.getElementById("checkForm").submit();
    return true;
}