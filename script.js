var password = document.getElementById("password")
var msg = document.getElementById("message");
var strength = document.getElementById("strength");

password.addEventListener('input',() =>{


    if (password.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(password.value.length < 6){
        strength.innerHTML = "Too Weak!";
        password.style.borderColor = "red";  
        msg.style.color = "red";   
   }     
    else if(password.value.length >= 6 && password.value.length < 8 ){
        strength.innerHTML = "Meduim";  
        password.style.borderColor = "orange";  
        msg.style.color = "orange";     
    } 
    else if(password.value.length >= 8 && containsUppercase(password.value)){
        strength.innerHTML = "Strong";  
        password.style.borderColor = "#26d730";  
        msg.style.color = "#26d730";   
    } 

    else if(password.value.length >= 6 && hasNumber(password.value)){
        strength.innerHTML = "Strong";  
        password.style.borderColor = "#26d730";  
        msg.style.color = "#26d730";   
    } 
    else if(password.value.length >= 1 && hasSymbol(password.value)){
        strength.innerHTML = "Strong";  
        password.style.borderColor = "#26d730";  
        msg.style.color = "#26d730";   
    } 
    else if(password.value.length >= 12 && hasLower(password.value)){
        strength.innerHTML = "strong";
        password.style.borderColor = "#26d730";  
        msg.style.color = "#26d730";   
    }

    if( hasLower(password.value)){
        document.getElementById("hiddenletter").style.display = "inline";  
    }else{
        document.getElementById("hiddensletter").style.display = "none";  
    }
    if( containsUppercase(password.value)){
        document.getElementById("hiddencapital").style.display = "inline";  
    }else{
        document.getElementById("hiddencapital").style.display = "none";  
    }
    if( hasNumber(password.value)){
        document.getElementById("hiddennumber").style.display = "inline";  
    }else{
        document.getElementById("hiddennumber").style.display = "none";  
    }
    if( hasSymbol(password.value)){
        document.getElementById("hiddensymbol").style.display = "inline";  
    }else{
        document.getElementById("hiddensymbol").style.display = "none";  
    }
    
})


  function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }
  function hasLower(str) {
    return /[a-z]/.test(str);
  }
  
  function hasNumber(str) {
    return /\d/.test(str);
  }

  function hasSymbol(str) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
  }




