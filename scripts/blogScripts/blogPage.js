const articleId = location.href.split('?id=')[1];
let comments = document.getElementsByClassName('otherComments')[0];
let blogContainer = document.getElementsByClassName('article-holder')[0];
let commentForm = document.getElementById('commentForm');
let commentFrame = document.getElementById('commentFrame');



console.log(blogContainer);
console.log(comments);

function gettingArticle () {
    return fetch('https://kundwabruno-portfolio.herokuapp.com/articles/' + articleId).then(response => response.json());
}

async function showArticle () {
    console.log('Getting Article');
    let article = await gettingArticle();
    console.log(article);

    let articleHtml = ` <div class="article">
    <div class="image"><img src="../public/images/programming.jpg" alt=""></div>
    <div class="articleHead">
        <div class="title">${article.title}</div>
        <div class="date">Posted ${moment(article.date).fromNow()}</div>
        <div class="thumbnails">
            <i style="color: #DF376C;" class="far fa-heart "><span>12</span></i>
            <a href="#addComment"><i class="fas fa-comments "><span>5</span></i></a>
        </div>
    </div>
  </div>
  <div class="articleBody">
      <p>${article.description}</p>
  </div>
`;

    blogContainer.innerHTML = articleHtml;

    if(article.comments == null) {
        comments.innerHTML = "<i>No comments</i>";
    }else{

    article.comments.forEach(element => {

        let commentHtml = `
            <div class="comment">
               <div class="userThumbnail">
                   <i style="color: white; font-size: 20px; margin-right: 10px;" class="fas fa-user"></i><span>${element.username}</span>
                </div>
                <div class="body"><p>${element.comment}</p></div>
                <div class="commentDate"><p>${moment(element.date).fromNow()}</p></div>
            </div>`;
         comments.innerHTML += commentHtml;

    });
}
}

showArticle();

commentForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    function addComment(){
        let data = {
            body : commentForm.body.value
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
});






