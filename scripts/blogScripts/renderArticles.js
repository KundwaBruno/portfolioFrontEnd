let articleContainer = document.getElementsByClassName('container')[0];


let articleArray = [];
let commentForm = [];

function gettingArticles () {
    return fetch('https://kundwabruno-portfolio.herokuapp.com/articles').then(response => response.json());
}

async function renderInBrowser() {
    console.log('Getting Data');
    const articles = await gettingArticles();
    console.log(articles);
    articles.forEach(element => {
        var articleHtml = `<div data-id="${element._id}" class="blog">
        <div class="blog-content-container">
            <div class="img-container">
                <img src="../public/images/programming.jpg" alt="blog-image"><br>
            </div>
            <div class="blog-content">
                <div class="blog-head">
                    <div class="title"><a href= "../pages/blogPage.html?id=${element._id}">${element.title}</a></div>
                    <div class="date">Posted ${moment(element.date).fromNow()}</div>
                </div>
                <div id="blog-body" class="blog-body">
                    ${element.description}
                </div>
                <a style="color: #64ffda" href="../pages/blogPage.html?id=${element._id}">click here to read more_</a>
            </div>
            <div class="iconsThumb">
            <i style="color: #DF376C;" class="far fa-heart "><span>12</span></i>
            <i class="fas fa-comments "><span>12</span></i>
            </div>
        </div> 
    </div>`;
        articleContainer.innerHTML += articleHtml;
        var divs = document.getElementsByClassName('blog-body');
        for( let i=0;i<divs.length;i++) {
        divs[i].innerHTML = divs[i].innerHTML.substring(0,85) + "...";
        }
    });
}

renderInBrowser();
