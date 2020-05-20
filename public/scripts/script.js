document.addEventListener('DOMContentLoaded', () => {
  getClients();
});

function getClients() {
  fetch('http://localhost:5000/api/clientes')
    .then(res => {
      return res.json();
    })
    .then(data => {
      let clients = '';
      let clientList = JSON.parse(data);

      clientList.forEach(client => {
        let clientElement = 
          ` <ul class="cardCli" id=${client.id}>
              <li class="cat">${client.id}</li>
              <li class="cat">${client.name}</li>
              <li class="cat">${client.description}</li>
            </ul>`;

        clients += clientElement;
      });

      document.getElementById('LIST_CLI').innerHTML = clients;
    });
}


function newPost() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('desc').value;

  let post = {title, description};

  const options = {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(post)
  }

  fetch('http://localhost:5000/api/new', options)
    .then(res => {
      updatePosts();
      document.getElementById('title').value = '';
      document.getElementById('desc').value = '';
    })
}