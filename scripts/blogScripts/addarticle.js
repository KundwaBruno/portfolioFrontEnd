
let form = document.getElementById("addArticle");
let message = document.getElementById("errorMessage");
let articleCounter = 0;
var markupStr = $('#summernote').summernote('code');
let date = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
dateToday = date.toLocaleDateString("en-US",options);
console.log(dateToday);
form.date.value = dateToday;
form.date.disabled = true;

// function validation(){
//     let msgArray = [];
//     if(form.title.value.length < 3){
//          msgArray.push("Please check your title");
//     }
//     if(form.description.value.length < 10){
//         msgArray.push("Please check your description");
//     }
//     if (msgArray.length > 0) {
//         message.style.display = "block";
//         message.innerText = msgArray.join(" , ");
//       }
// }


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // validation();
    db.collection("Articles").add({
        date:form.date.value,
        title:form.title.value,
        description: tinyMCE.activeEditor.getContent(),
        likes: "0",
        dislikes: "0",
        comments: "0"

    })
    alert("Article Updated");
    form.title.value = "";
    tinyMCE.activeEditor.getContent() = "";
})