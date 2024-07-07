function myFunc() {
    let user = document.getElementById('input');
    user.removeAttribute('disabled');
    console.log(user);

}

function myFunc2() {
    let user = document.getElementById('input');
    user.setAttribute('disabled', true);

    console.log(user);

}

