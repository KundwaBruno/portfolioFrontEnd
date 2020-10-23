// -----------------------MONGODB------------------------
let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
      };

fetch('https://kundwabruno-portfolio.herokuapp.com/articles')
.then(response => response.json())
.then(data => data.forEach(element => {
    let list = document.getElementById('article-thumbnails');
    let li = document.createElement('li');
    let title = document.createElement('span');
    let date = document.createElement('span');
    let deleteIcon = document.createElement('i');



    li.setAttribute('data-id',element._id);
    title.textContent = "Title: " + element.title;
    date.textContent = "Date: " + element.date;
    deleteIcon.setAttribute('class','fas fa-trash-alt trashIcon');
    deleteIcon.setAttribute('id','trashIcon');
    li.appendChild(title);
    li.appendChild(date);
    li.appendChild(deleteIcon);
    list.appendChild(li);

    deleteIcon.addEventListener('click', function (e){
        let articleID = e.target.parentElement.getAttribute("data-id");
        fetch('https://kundwabruno-portfolio.herokuapp.com/articles/' + articleID, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            alert(data.message);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    })

}));



































// ------------------------FIREBASE-----------------------------




// const articles = document.getElementById("article-thumbnails");
// let articleCounter = 1;
// let date = new Date();
// let options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//   };
// dateToday = date.toLocaleDateString("en-US",options);
// console.log(dateToday);

// function renderInBrowser(data){
//     let li = document.createElement("li");
//     let deleteIcon = document.createElement("i");
//     let articleId = document.createElement("span");
//     let title = document.createElement("span");
//     let date = document.createElement("span");
//     let likes = document.createElement("i");
//     let dislikes = document.createElement("i");
//     let comments = document.createElement("i");

//     li.setAttribute("data-id",data._id);
//     deleteIcon.setAttribute("class","fas fa-trash-alt trashIcon");
//     likes.setAttribute("class","fas fa-thumbs-up");
//     dislikes.setAttribute("class","fas fa-thumbs-down");
//     comments.setAttribute("class","fas fa-comment");
//     articleId.textContent = articleCounter;
//     title.textContent = doc.data().title;
//     date.textContent = dateToday;
//     likes.textContent = " " + doc.data().likes;
//     dislikes.textContent = " " + doc.data().dislikes;
//     comments.textContent = " "+ doc.data().comments;

//     li.appendChild(articleId);
//     li.appendChild(title);
//     li.appendChild(date);
//     li.appendChild(likes);
//     li.appendChild(dislikes);
//     li.appendChild(comments);
//     li.appendChild(deleteIcon);

//     articles.appendChild(li);
//     articleCounter = articleCounter + 1;

//     deleteIcon.addEventListener("click",(e)=>{
//         e.stopPropagation();
//         let id = e.target.parentElement.getAttribute("data-id");
//         db.collection("Articles").doc(id).delete().then(()=>{
//             alert("article deleted");
//         }).catch((error)=>{
//             alert(err);
//         });
//     })





// db.collection("Articles").orderBy("date").get().then((snapshot)=>{
//     snapshot.docs.forEach((doc) => {
//         renderInBrowser(doc);
//     });
// })
//  }
// db.collection("Articles").onSnapshot(snapshot =>{
//     let changes = snapshot.docChanges();
//     changes.forEach(change => {
//         if(change.type == "added"){
//             renderInBrowser(change.doc);
//         }else if(change.type == "removed"){
//             let li = articles.querySelector("[data-id="+change.doc.id+"]");
//             articles.removeChild(li);
//         }
//     })
// })

