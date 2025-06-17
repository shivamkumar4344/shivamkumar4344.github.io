const loginForm = () => {
    const str = `<div>
    <h3>Login Form</h3>
    <button onclick='showHome()'>Show Home</button>
    <br><br>
    <button onclick = 'RegisterForm()'>Create Account</button>`;
    root.innerHTML = str + "</div>";
}

const RegisterForm = () => {
    const str = `<div>
    <h3>Register Form Form</h3>
    <button onclick='loginForm()'>Already a member</button>`;
    root.innerHTML = str+ "</div>";
}

const showHome =() =>{
    const str = `<div>
    <h2>Welcome</h2>
    <button onclick='loginForm()'>Logout</button>`
    root.innerHTML = str + "</div>";
} 