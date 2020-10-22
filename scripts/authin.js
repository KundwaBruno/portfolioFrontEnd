let form = document.querySelector("#signin-form");

auth.onAuthStateChanged(user=>{
    if(user){
        console.log("User logged in as : " + user.email);
    }else{
        console.log("User logged out");
    }
})
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email = form["signin-email"].value;
    let password = form["signin-password"].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        console.log("Logged in");
        form.reset();
    })
    //location.replace("file:///C:/Users/TDE_KBM/Desktop/Programming/Andela/UI/index.html");
})