let logBtn = document.getElementById('logBtn');
let blogPage = document.getElementById('gotoBlog');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        user.getIdTokenResult().then(idTokenResult => {console.log(idTokenResult.claims.admin);})
        logBtn.innerHTML = '<span>Logout </span>' + '<i class="fas fa-sign-out-alt"></i>';

        logBtn.addEventListener('click' , (e)=>{
            e.preventDefault();
            firebase.auth().signOut()
            .then(function() {
              location.replace('../index.html');
              console.log('Signed out successfully');
            })
            .catch(function(error) {
              console.log(error);
            });
        })

        blogPage.setAttribute('href' , '../pages/blog.html');
        let currentUser = firebase.auth().currentUser;
        let display = document.getElementById('welcome');
        if(display){
          display.textContent = 'Welcome ' + currentUser.displayName;
        }
        console.log(`User ${currentUser.displayName} is signed in`);
    } else {
        logBtn.innerHTML = '<span>Login </span>' + '<i class="fas fa-sign-in-alt"></i>';
        logBtn.setAttribute('href' , '../pages/signin.html')
        blogPage.setAttribute('href' , '../pages/signup.html');
        console.log('User is signed out');
    }
  });