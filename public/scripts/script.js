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


function newClient() {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;

  let client = {name, description};

  const options = {
    method: 'POST',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify(client)
  }

  fetch('http://localhost:5000/api/novo', options)
    .then(res => {
      getClients();
      document.getElementById('name').value = '';
      document.getElementById('description').value = '';

      alert('Novo cliente cadastrado com sucesso!');
    })
}