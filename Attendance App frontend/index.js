
function showLoginForm()
{
    document.getElementById('form-container').setAttribute("style","display:block;transition:ease-in-out 2s;");

}
function showpassword()
{
    var element=document.getElementById('password-field');
    element.type = 'text';
}

function hidepassword() {
    var element=document.getElementById('password-field');
    element.type = 'password';
}
function hideConfirmPassword()
{
    var element=document.getElementById('Confirm-password')
    element.type='password';
}
function showConfirmPassword()
{
    var element=document.getElementById('Confirm-password')
    element.type='text';
}
function matchPassword()
{
    var pass1=document.getElementById('password').value;
    var pass2 =document.getElementById('Confirm-password').value;
    var color=document.getElementById('Confirm-password').style.borderColor;
    if(pass1!==pass2 && pass2!='')
    {
        document.getElementById('Confirm-password').style.borderColor= 'red';
    }
    else{
        document.getElementById('Confirm-password').style.borderColor= '';
    }
}
