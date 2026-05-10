function checkPassword() {
    var passwordInput = document.getElementById('password');
    var password = passwordInput.value;

//pw  
  if (password === 'pw') {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('content-container').style.display = 'block';
    } else {
        alert('SORRY! Invalid password, please try again.');
    }
}

function revealPassword() {
    var passwordInput = document.getElementById('password');
    passwordInput.type = 'text';
}

document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

document.getElementById('reveal-button').addEventListener('click', function() {
    revealPassword();
});

