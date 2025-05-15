# Tasks-Backend

Este projeto é uma API REST para gerenciar tarefas, com o objetivo de fixar um CRUD usando **MySQL** e estudar a estrutura **MVC**.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MySQL**
- **Postman**
- **Beekeper Studio**

## Funcionalidades da API

### **GET**

- **`/api/tasks`**  
  Retorna a lista de todas as tarefas cadastradas no banco de dados.

- **`/api/tasks/:id/`**  
  Retorna uma tarefa específica, identificada pelo `id` passado na URL.

### **POST**

- **`/api/tasks`**  
  Cria uma nova tarefa.  
  **Body:**  
  ```json
  { 
    "name": "Exemplo de Tarefa", 
    "status": "doing"
  }

### **PUT**

- **`/api/tasks/:id/`**
Atualiza o status de uma tarefa, identificada pelo `id` passado na URL.
**Body:**
```json
{
  "status": "done"
}
```
### **DELETE**

- **`/api/tasks/:id/`**
Remove a tarefa, identificada pelo `id` passado na URL.
