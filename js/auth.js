function register() {
    var username = document.getElementById('regUser').value;
    var password = document.getElementById('regPass').value;
    if(username && password){
        localStorage.setItem(username, password);
        alert('Registration Successful!');
        window.location.href = 'login.html';
    } else {
        alert('Please fill all fields.');
    }
}

function login() {
    var username = document.getElementById('loginUser').value;
    var password = document.getElementById('loginPass').value;
    if(localStorage.getItem(username) === password){
        localStorage.setItem('loggedInUser', username);
        alert('Login Successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials.');
    }
}

function checkLogin() {
    if(localStorage.getItem('loggedInUser')){
        document.body.innerHTML = `<header><h1>Stay Safe App - Dashboard</h1></header>
        <div class='center-content'>
            <h2>Welcome, ${localStorage.getItem('loggedInUser')}!</h2>
            <a href='scream_alarm.html' class='button'>Scream Alarm</a><br>
            <a href='fake_call.html' class='button'>Fake Call</a><br>
            <a href='where_are_you.html' class='button'>Where Are You</a><br>
            <a href='track_me.html' class='button'>Track Me</a><br>
            <a href='sos_alert.html' class='button'>SOS Alert</a><br>
            <a href='logout.html' class='button'>Logout</a>
        </div>`;
    }
}
