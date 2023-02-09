const myform = document.getElementById("myform");
const errName = document.getElementById("errName");
const errEmail = document.getElementById("errEmail");
const errPass = document.getElementById("errPass");
const output = document.getElementById("output");
const pass = document.getElementById("pass");
const showpass = document.getElementById("showpass");

errName.style.cssText = `color: red;`;
errEmail.style.cssText = `color: red;`;
errPass.style.cssText = `color: red;`;
output.style.cssText = `color: green;`;

myform.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(myform)
    const username = formData.get("username");
    const email = formData.get("email");
    const pass = formData.get("pass");

    if(!username){
        errName.textContent =  "Please write your name";
    }else if(!/^[A-Za-z. ]*$/.test(username)){
        errName.textContent =  "Invalid name format";
    }else{
        errName.textContent =  null;
    }

    if(!email){
        errEmail.textContent =  "Please write your email";
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        errEmail.textContent =  "Invalid email address";
    }else{
        errEmail.textContent = null;
    }
    
    if(!pass){
        errPass.textContent =  "Please write your password";
    }else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(pass)){
        errPass.textContent =  "Please provide a strong password";
    }else{
        errPass.textContent = null;
    }

    if(!errName.textContent && !errEmail.textContent && !errPass.textContent){
        const div1 = document.createElement("div")
        const div2 = document.createElement("div")
        div1.textContent = username;
        div2.textContent = email;
        output.appendChild(div1);
        output.appendChild(div2);
        document.getElementsByName("username")[0].value = null;
        document.getElementsByName("email")[0].value = null;
        document.getElementsByName("pass")[0].value = null;
    }else{
        output.innerHTML = null;
    }
})

showpass.addEventListener("click", (e)=>{
    if(e.target.checked){
        pass.type = "text";
    }else{
        pass.type = "password"; 
    }
})