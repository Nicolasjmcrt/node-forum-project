
function addTopic(title, question,user_id ) {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "title": title,
  "question": question,
  "user_id": user_id
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
};

fetch("http://localhost:3000/topic/", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

let form = document.querySelector('form');
const id =window.localStorage.getItem('user_id')

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const topic = Object.fromEntries(formData)
  console.log(topic);
  addTopic(topic.title, topic.question, id);
})

const user_id = 3 

window.localStorage.setItem('user_id', user_id)


console.log(id);



// addTopic('titre bug', 'bug',3)