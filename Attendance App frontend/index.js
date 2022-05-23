var element1=document.getElementById('login-button');

function showLoginForm()
{
    var element=document.getElementById('form-container');
        element.setAttribute("style","display:block;transition:ease-in-out 2s;");

}

function showpassword()
{
    var element1=document.getElementById('password-field');
    // if(element1.type==='password')
    // {
    //     element1.type='text';
    // }
    // else
    // {
    //     element1.type='password';

    // }
    element1.type = 'text';
}

function hidepassword() {
    var element1=document.getElementById('password-field');
    element1.type = 'password';
}