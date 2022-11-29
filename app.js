var submit = document.getElementById("submitButton");
var form = document.getElementById("becomeFriend");
submit.addEventListener("click", function(){
    if(!isValid){
        e.preventDefault();    //stop form from submitting
    }
    if (isValid){
    form.style.visibility = 'hidden';
    }
});