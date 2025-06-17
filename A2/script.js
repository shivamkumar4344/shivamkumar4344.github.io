let users = [];

const loginForm = () => {
    const str = `<div>
    <h3>Login Form</h3>
    <p id="errorTxt"></p>
    <input type="text" placeholder="Enter your mail" name="email" id="formEmail">
    <br><br>
    <input type="password" placeholder="Enter your password" name="password" id="formPassword">
    <br><br>
    <p><button onclick='validateUser()'>Submit</button></p>
    <button onclick='showHome()'>Show Home</button><br>
    
    <br><br>

    <button onclick = 'RegisterForm()'>Create Account</button>`;
    root.innerHTML = str + "</div>";
}

const RegisterForm = () => {
    const str = `<div>
    <h3>Register Form</h3>
    <input type="text" placeholder="Enter your username" name="username" id="formUsername1">
    <br><br>
    <input type="text" placeholder="Enter your mail" name="email" id="formEmail1">
    <br><br>
    <input type="password" placeholder="Enter your password" name="password" id="formPassword1">
    <br><br>
    <p><button onclick='saveUser()'>Submit</button></p>
    <button onclick='loginForm()'>Already a member</button>`;
    root.innerHTML = str+ "</div>";
}

const showHome =() =>{
    const str = `<div>
    <h2>Welcome</h2>
    <button onclick='loginForm()'>Logout</button>`
    root.innerHTML = str + "</div>";
} 

const saveUser = () =>{
    let name = document.getElementById('formUsername1').value;
    let pass = document.getElementById('formPassword1').value;
    let email = document.getElementById('formEmail1').value;
    users.push({
        name,
        pass,
        email
    });
   loginForm();
}

const showUser = () =>{
    let email = document.getElementById('formEmail').value;
    let pass = document.getElementById('formPassword').value;
    const user = users.find(u => u.email === email && u.pass === pass);
    if (user) {
        const str = `<div>
            <h2>Welcome, ${user.name}</h2>
            <p>Email: ${user.email}</p>
            <button onclick='loginForm()'>Logout</button>
        </div>`;
        root.innerHTML = str;
    } else {
        document.getElementById("errorTxt").innerHTML = "User not found";
    }
}

const validateUser = () =>{
    let email = document.getElementById("formEmail").value;
    let pass = document.getElementById("formPassword").value;
    const found = users.find((value)=>
        value.email === email && value.pass === pass
    );

    if(found){
        showUser();
    }
    else{
        document.getElementById("errorTxt").innerHTML = "Access Denied";
    }
}