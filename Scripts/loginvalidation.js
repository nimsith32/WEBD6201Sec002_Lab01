// Document is ready
$(document).ready(function () {


    // Validate Email
        const email =
            document.getElementById('email');
        email.addEventListener('blur', ()=>{
        let regex =
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if(regex.test(s)){
            email.classList.remove(
                    'is-invalid');
            $('#ErrorMessage').html('');
            emailError = true;
            return true;
            }
            else{
                email.classList.add(
                    'is-invalid');
                emailError = false;
                $('#ErrorMessage').html('Please enter valid email');
                return false;
            }
        })
        
    // Validate Password
        let passwordError = true;
        $('#password').keyup(function () {
            validatePassword();
        });
        
            
        
            function validateEmail() {
            let emailValue =
                $('#email').val();
            if (emailValue.length == '') {
                $('#ErrorMessage').html("Please enter email");
                emailError = false;
                return false;
            }else {
    
                $('#ErrorMessage').html("");
                emailError = true;
                return true;
            }
        }
    
        function validatePassword() {
            let passwordValue =
                $('#password').val();
            if (passwordValue.length == '') {
                $('#ErrorMessage').html("Please enter password");
                passwordError = false;
                return false;
            }else {
    
                $('#ErrorMessage').html("");
                passwordError = true;
                return true;
            }
        }
    // Submit button
        $('#submitbtn').click(function () {
            if(validateEmail()===true){
                validatePassword();
            }
            
            if (
                (passwordError == true)  &&
                (emailError == true)) {
                $('#showName').html('<a href="javascript:void(0);">'+$('#email').val()+'</a>');
                return true;
            } else {
                $('#showName').html('')
                return false;
            }
        });
    });
    