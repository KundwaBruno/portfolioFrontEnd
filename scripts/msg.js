let messageContainer = document.getElementsByClassName('main-container')[0];

console.log(messageContainer);

function getMessages () {
    return fetch('http://localhost:3000/messages').then(response => response.json());
}

async function renderMessages () {
    const messages = await getMessages();
    messages.forEach(message => {
        let messageHtml = `<div id="${message._id}" class="message-container">
        <div class="triangle"></div>
        <div class="name">${message.name}</div>
        <div class="message">${message.message}</div>
        <div class="date"><i>${moment(message.date).fromNow()}</i> </div>
    </div>`

        messageContainer.innerHTML += messageHtml;
        

    });

}

renderMessages();
