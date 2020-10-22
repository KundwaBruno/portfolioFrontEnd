
let form = document.querySelector("#signupForm");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        let email = form["signup-email"].value;
        let password = form["signup-password"].value;
        auth.createUserWithEmailAndPassword(email, password).then(cred =>{
            cred.user.updateProfile({
            displayName: document.getElementById("fname").value
              })
            form.reset();
        })
        
    })


