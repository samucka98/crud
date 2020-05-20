const geradorIDs = require('../functions/geradorIDs');

module.exports = {

  // Array de clientes
  clientes: [],

  // Listar todos os clientes
  getAllClients() {
    return this.clientes;
  },

  // Editar cadastro
  setClient(id) {
    console.log(this.clientes.id);
  },

  // Criar cadastro
  newClient(name, description) {
    this.clientes.push({
      id: geradorIDs(),
      name: name,
      description: description
    })
  },

  // Deletar cadastro
  deleteClient(id) {
    console.log(this.clientes.id)
  }
}