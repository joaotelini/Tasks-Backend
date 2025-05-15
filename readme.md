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

- **`/tasks`**  
  Retorna a lista de todas as tarefas cadastradas no banco de dados.


### **POST**

- **`/tasks`**  
  Cria uma nova tarefa.  
  **Body:**  
  ```json
  { 
    "title": "Exemplo de Tarefa",
    "description": "Exemplo de descricao",
  }

### **PUT**

- **`/tasks/:id/`**
Atualiza o status de uma tarefa, identificada pelo `id` passado na URL.
**Body:**
```json
{
  "status": "completed"
}
```
### **DELETE**

- **`/tasks/:id/`**
Remove a tarefa, identificada pelo `id` passado na URL.
