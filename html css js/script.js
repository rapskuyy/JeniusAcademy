function validate(){
    let input_fname = document.getElementById("first-name");
    let input_lname = document.getElementById("last-name");
    let input_email = document.getElementById("email");
    let input_password = document.getElementById("password");
    let input_cpassword = document.getElementById("confirm-password");
    let input_number = document.getElementById("phone");

    if(input_fname.value == "" || input_lname == "" || input_email.value == "" || input_password.value == "" || input_cpassword == "" || input_number == ""){
        alert("Fill all the components");
    }else if(input_fname.value.length <= 2){
        alert("First name must have more than two characters");
    }else if(input_lname.value.length <= 2){
        alert("Last name must have more than two characters");
    }else if(input_email.value.endsWith("@gmail.com") == false){
        alert("Input @gmail.com");
    }else if(isAlphaNum(input_password.value)==false){
        alert("Password must be alphanumeric");
    }else if(input_password.length <= 5){
        alert("Password must be more than 5 letters");
    }else if(input_password.value != input_cpassword){
        alert("Password does not match");
    }else if(number.length > 12 || number.length < 11){
        alert("Phone number must have the length of 11 or 12");
    }else if(!isNumber(input_number)){
        alert("Phone number must in numeric");
    }
}

function isAlphaNum(element){
    for(let i = 0; i<element.length; i++){
        if(element[i]>='a'&& element[i]<='z'){
            continue;
        }else if(element[i]>='A'&& element[i]<='Z'){
            continue;
        }else if(element[i]>='0'&& element[i]<='9'){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

function isNumber(element){
    for(let i = 0; i < element.length; i++){
        if(element[i]>='0'&& element[i]<='9'){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}