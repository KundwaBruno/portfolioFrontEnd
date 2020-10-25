let addArticle = document.getElementById("addArticle");
let deleteArticle = document.getElementById("deleteArticle");
let message = document.getElementById("viewMessages");
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
    frame.setAttribute("src","msg.html");
})