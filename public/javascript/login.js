async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#uname').value.trim();
    const password = document.querySelector('#password').value.trim();
    if (username && password) {
        console.log(username);
        console.log(password);
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/activity/');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('.username').addEventListener('submit', loginFormHandler);



