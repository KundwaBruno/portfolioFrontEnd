const articleId = location.href.split('?id=')[1];
let comments = document.getElementsByClassName('otherComments')[0];
let blogContainer = document.getElementsByClassName('article-holder')[0];
let commentForm = document.getElementById('commentForm');
let commentFrame = document.getElementById('commentFrame');
let loader = document.getElementById('loader');


function gettingArticle () {
    return fetch('https://kundwabruno-portfolio.herokuapp.com/articles/' + articleId).then(response => response.json());
}

async function showArticle () {
    loader.style.display = "flex";
    let article = await gettingArticle();
    loader.style.display = "none";

    let articleHtml = ` <div class="article">
    <div class="image"><img src="../public/images/programming.jpg" alt=""></div>
    <div class="articleHead">
        <div class="title">${article.title}</div>
        <div class="date">Posted ${moment(article.date).calendar()}</div>
        <div class="thumbnails">
            <i id="likeBtn" style="color: #DF376C;" class="far fa-heart"><span id="likeCounter">${article.likes.length}</span></i>
            <a href="#addComment"><i class="fas fa-comments "><span>${article.comments.length}</span></i></a>
        </div>
    </div>
  </div>
  <div class="articleBody">
      <p>${article.description}</p>
  </div>
`;

    blogContainer.innerHTML = articleHtml;

    if(article.comments.length === 0) {
        comments.innerHTML = "<i style='color:grey'>No comments yet.</i>";
    }else{

    article.comments.forEach(element => {

        let commentHtml = `
            <div class="comment">
               <div class="userThumbnail">
                   <i style="color: white; font-size: 20px; margin-right: 10px;" class="fas fa-user"></i><span>${element.username}</span>
                </div>
                <div class="body"><p>${element.comment}</p></div>
                <div class="commentDate"><p>${moment(element.date).calendar()}</p></div>
            </div>`;
         comments.innerHTML += commentHtml;

    });
}
firebase.auth().onAuthStateChanged(user => {
    async function likeStatus() {
        let data = {
            username : user.displayName
        }
        const status = await fetch(`https://kundwabruno-portfolio.herokuapp.com/articles/${articleId}/likes/status` ,
         {
         method : 'POST' ,
         headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
        let likeBtn = document.getElementById('likeBtn');
        let unliked = "far fa-heart";
        let liked = "fas fa-heart";

        if(status.liked === true){
            likeBtn.setAttribute('class' , liked);
            console.log("You have already liked this post");
        }else{
            likeBtn.setAttribute('class' , unliked);
            console.log("You have not liked this post");
        }
    }
    
    likeStatus();
    function liveUpdate() {
        setInterval(async ()=>{
            try{
                const article = await fetch(`https://kundwabruno-portfolio.herokuapp.com/articles/` + articleId).then(response => response.json());
            let likeCounter = document.getElementById('likeCounter');
            let likes = article.likes.length;
            likeCounter.textContent = likes;
            }catch (error) {
                console.log(error);
            }
        },100);
    }
    liveUpdate();
})

async function likeBtn () {
    let likeBtn = document.getElementById('likeBtn');

    likeBtn.addEventListener('click' , (e) => {

        e.preventDefault();
        e.stopPropagation();
        let unliked = "far fa-heart";
        let liked = "fas fa-heart";
       
        firebase.auth().onAuthStateChanged( function (user) {
           
            async function addingLike() {
                let data = {
                    username : user.displayName
                }
                const response = await fetch(`https://kundwabruno-portfolio.herokuapp.com/articles/${articleId}/likes/` , {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(response => response.json());
               console.log(response.message);
               if(response.message === "Liked"){
               likeBtn.setAttribute('class' , liked);
               }else{
                likeBtn.setAttribute('class' , unliked);
               }

            }

        addingLike();
            
        
    })

})
}
likeBtn();



}

showArticle();





commentForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    firebase.auth().onAuthStateChanged(function (user) {

    function addComment(){
        let data = {
            body : commentForm.body.value,
            name : user.displayName
        }
        return fetch('https://kundwabruno-portfolio.herokuapp.com/articles/' + articleId + '/comment', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json());
    }


    async function commentConfirmation() {
        const response = await addComment ();
        console.log('Success : ' + response.message);
        alert("Comment added successfully");
        location.reload();


    }
        commentConfirmation();


    })

});






