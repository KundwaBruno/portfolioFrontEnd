let addArticle = document.getElementById("addArticle");
let deleteArticle = document.getElementById("deleteArticle");
let message = document.getElementById("viewMessages");
let editArticle = document.getElementById('editArticle');
let frame = document.getElementById("frame");


addArticle.addEventListener("click", (e)=> {
    e.preventDefault();
    frame.setAttribute("src", "addArticle.html");
});

deleteArticle.addEventListener("click", (e)=>{
    e.preventDefault();
    frame.setAttribute("src","allarticles.html");
})

message.addEventListener("click", (e)=>{
    e.preventDefault();
    frame.setAttribute("src","../pages/msg.html");
})

editArticle.addEventListener('click' , (e) => {
    e.preventDefault();
    e.stopPropagation();
    frame.setAttribute("src" , "../pages/editArticle.html");
})