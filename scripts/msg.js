const articles = document.getElementById("article-thumbnails");
let date = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
dateToday = date.toLocaleDateString("en-US",options);
console.log(dateToday);

function renderInBrowser(doc){
    let li = document.createElement("li");
    let deleteIcon = document.createElement("i");
    let name = document.createElement("span");
    let date = document.createElement("span");
    let email = document.createElement("span");
    let message = document.createElement("span");

    li.setAttribute("data-id",doc.id);
    deleteIcon.setAttribute("class","fas fa-trash-alt trashIcon");
    
    name.innerHTML = "<i>Name:</i>   "+ doc.data().Name;
    date.innerHTML = "<i>Date:</i>   " + dateToday;
    email.innerHTML = "<i>Email:</i>   " + doc.data().Email;
    message.innerHTML = "<i>Message:</i>   " + doc.data().Message;
    deleteIcon.textContent = " Delete";

    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(message);
    li.appendChild(date);
    li.appendChild(deleteIcon);

    articles.appendChild(li);

    deleteIcon.addEventListener("click",(e)=>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id");
        db.collection("Messages").doc(id).delete().then(()=>{
            alert("Message deleted");
        }).catch((error)=>{
            alert(err);
        });
    })
    
}

 db.collection("Messages").get().then((snapshot)=>{
     snapshot.docs.forEach((doc) => {
         renderInBrowser(doc);
     });
 })

