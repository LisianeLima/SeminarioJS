function validateForm() {
    var name = document.getElementById('fname')
    var lastName = document.getElementById('flastname')
    if(name.value === ""){
        name.style.borderColor="red"
        errorName = document.querySelector('#nameError').style.display="block"

    }

    if(name.value === ""){
        lastName.style.borderColor="red"
        errorLastName = document.querySelector('#lastNameError').style.display="block"
        

    }

    if(femail.value === ""){
        femail.style.borderColor="red"
        errorEmail = document.querySelector('#emailError').style.display="block"
        

    }

    if(fpassword.value === ""){
        femail.style.borderColor="red"
        errorEmail = document.querySelector('#passwordError').style.display="block"
        

    }
   // var lastname = (document.getElementById('flastname').value!="")
    
    //document.getElementById("myForm").submit();

  }