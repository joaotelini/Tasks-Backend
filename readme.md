# Tasks-Backend

Este projeto é uma API REST para gerenciar tarefas, com o objetivo de fixar um CRUD usando **MySQL** e estudar a estrutura **MVC**.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MondoDB**
- **Insomnia**

## Funcionalidades da API

### **GET**

- **`/tasks`**  
   Retorna a lista de todas as tarefas cadastradas no banco de dados.
  ```json
   [
   	{
   		"_id": "6858aec56de818cdd3a89f48",
   		"title": "Migrar de mysql para mongo",
   		"status": false
   	}
   ]
  ```

### **POST**

- **`/tasks`**  
  Cria uma nova tarefa.  
  **Body:**
  ```json
   { "title": "Migrar de mysql para mongo" }
  ```

### **PATCH**

- **`/tasks/:id/`**
  Atualiza o status de uma tarefa, identificada pelo `id` passado na URL e pelo `status` passado no body.
  **Body:**

```json
{
  "status": "true" || "false"
}
```

### **DELETE**

- **`/tasks/:id/`**
  Remove a tarefa, identificada pelo `id` passado na URL.
