const loginForm = () => {
    const str = `<h3>Login Form</h3>
    <button onclick='showHome()'>Show Home</button>
    <br><br>
    <button onclick = 'RegisterForm()'>Create Account</button>`;
    root.innerHTML = str;
}

const RegisterForm = () => {
    const str = `<h3>Register Form Form</h3>
    <button onclick='loginForm()'>Already a member</button>`;
    root.innerHTML = str;
}

const showHome =() =>{
    const str = `<h2>Welcome</h2>
    <button onclick='loginForm()'>Logout</button>`
    root.innerHTML = str;
} 