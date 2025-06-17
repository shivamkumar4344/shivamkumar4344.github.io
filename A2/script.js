const loginForm = () => {
    const str = `<div>
    <h3>Login Form</h3>
    <input type="text" placeholder="Enter your mail" name="email">
    <br><br>
    <input type="password" placeholder="Enter your password" name="password">
    <br><br>
    <button onclick='showHome()'>Show Home</button>
    <br><br>
    <button onclick = 'RegisterForm()'>Create Account</button>`;
    root.innerHTML = str + "</div>";
}

const RegisterForm = () => {
    const str = `<div>
    <h3>Register Form</h3>
    <input type="text" placeholder="Enter your username" name="username">
    <br><br>
    <input type="text" placeholder="Enter your mail" name="email">
    <br><br>
    <input type="password" placeholder="Enter your password" name="password">
    <br><br>

    <button onclick='loginForm()'>Already a member</button>`;
    root.innerHTML = str+ "</div>";
}

const showHome =() =>{
    const str = `<div>
    <h2>Welcome</h2>
    <button onclick='loginForm()'>Logout</button>`
    root.innerHTML = str + "</div>";
} 