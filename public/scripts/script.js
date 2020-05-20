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
          `<div class="client" id=${client.id}>
              <button>Editar</button>
              <button>Remover</button>
              <span class="idClient">ID: id=${client.id}</span>
              <span>Nome: <a href="#">${client.name}</a></span>
              <p>Descrição: ${client.description}</p>
            </div>`;

        clients += clientElement;
      });

      document.getElementById('clients').innerHTML = clients;
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